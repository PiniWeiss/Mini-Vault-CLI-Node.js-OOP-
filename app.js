import { authService } from './services/authService.js';
import { vaultService } from './services/vaultService.js';
import { cliMenu } from './ui/cliMenu.js';

class App {
    constructor() {
        this.currentUser = null; // Session state [cite: 73-74]
    }

    start() {
        while (true) {
            try {
                if (!this.currentUser) {
                    this.guestFlow();
                } else {
                    this.userFlow();
                }
            } catch (err) {
                console.log("Error:", err.message);
            }
        }
    }

    guestFlow() {
        const choice = cliMenu.showGuestMenu();
        if (choice === '1') {
            const u = cliMenu.prompt("Username: ");
            const p = cliMenu.prompt("Password: ");
            authService.register(u, p);
            console.log("Registration successful!");
        } else if (choice === '2') {
            const u = cliMenu.prompt("Username: ");
            const p = cliMenu.prompt("Password: ");
            this.currentUser = authService.login(u, p);
        } else if (choice === '3') {
            process.exit();
        }
    }

    userFlow() {
        const choice = cliMenu.showUserMenu(this.currentUser.username);
        if (choice === '1') {
            const text = cliMenu.prompt("Note text: ");
            vaultService.addNote(this.currentUser.username, text);
        } else if (choice === '2') {
            const notes = vaultService.listNotes(this.currentUser.username);
            notes.forEach(n => console.log(`ID: ${n.id} | ${n.text}`));
        } else if (choice === '3') {
            const id = cliMenu.prompt("Note ID to delete: ");
            vaultService.deleteNote(this.currentUser.username, id);
        } else if (choice === '4') {
            this.currentUser = null;
        }
    }
}

const myApp = new App();
myApp.start();