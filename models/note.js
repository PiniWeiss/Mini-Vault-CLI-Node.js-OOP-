export class Note {
    constructor(id, ownerUsername, text) {
        this.id = id; // [cite: 23]
        this.ownerUsername = ownerUsername; // [cite: 24]
        this.text = text; // [cite: 25]
        this.createdAt = new Date().toISOString(); // [cite: 26]
    }
}