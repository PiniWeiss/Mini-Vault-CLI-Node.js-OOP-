import { noteRepository } from '../repositories/noteRepository.js';
import { Note } from '../models/note.js';

class VaultService {
    addNote(ownerUsername, text) {
        if (!text || text.length > 120) throw new Error("Note max 120 chars"); // [cite: 96]
        const newNote = new Note(Math.random().toString(), ownerUsername, text);
        noteRepository.add(newNote); // [cite: 59]
    }

    listNotes(ownerUsername) {
        return noteRepository.listByOwner(ownerUsername); // [cite: 60]
    }

    deleteNote(ownerUsername, noteId) {
        return noteRepository.deleteById(ownerUsername, noteId); // [cite: 61]
    }
}
export const vaultService = new VaultService();