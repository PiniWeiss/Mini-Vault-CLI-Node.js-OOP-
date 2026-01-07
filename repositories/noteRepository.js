import { notes } from '../data/notes.js';

class NoteRepository {
    add(note) {
        notes.push(note); // [cite: 44]
    }
    listByOwner(username) {
        return notes.filter(n => n.ownerUsername === username); // [cite: 45]
    }
    deleteById(ownerUsername, noteId) {
        const index = notes.findIndex(n => n.id === noteId && n.ownerUsername === ownerUsername);
        if (index !== -1) {
            notes.splice(index, 1); // [cite: 46]
            return true;
        }
        return false;
    }
}
export const noteRepository = new NoteRepository();