import { Note } from './note.js';

export class User {
    constructor(id, username, password) {
        this.id = id; // [cite: 13]
        this.username = username; // [cite: 14]
        this.password = password; // plain text [cite: 15, 101]
        this.createdAt = new Date().toISOString(); // [cite: 16]
        
        // יצירת 2 הערות דוגמה כחלק מהקונסטרקטור [cite: 99-100]
        this.exampleNotes = [
            new Note(Math.random().toString(), this.username, "Welcome to your vault!"),
            new Note(Math.random().toString(), this.username, "This is your first private note.")
        ];
    }
}