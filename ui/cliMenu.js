import readlineSync from 'readline-sync';

class CliMenu {
    showGuestMenu() { // [cite: 77-80]
        console.log("\n--- Guest Menu ---");
        console.log("1. Register\n2. Login\n3. Exit");
        return readlineSync.question("Choose: ");
    }

    showUserMenu(username) { // [cite: 81-85]
        console.log(`\n--- Welcome, ${username} ---`);
        console.log("1. Add note\n2. List notes\n3. Delete note\n4. Logout");
        return readlineSync.question("Choose: ");
    }

    prompt(msg) {
        return readlineSync.question(msg);
    }
}
export const cliMenu = new CliMenu();