import { userRepository } from '../repositories/userRepository.js';
import { noteRepository } from '../repositories/noteRepository.js';
import { User } from '../models/user.js';

class AuthService {
    register(username, password) {
        // Validation Rules [cite: 87-93]
        if (!username || username.length < 3) throw new Error("Username must be at least 3 chars");
        if (!password || password.length < 6) throw new Error("Password must be at least 6 chars");
        if (userRepository.exists(username)) throw new Error("Username already exists");

        const newUser = new User(Math.random().toString(), username, password);
        userRepository.add(newUser);

        // שמירת הערות הדוגמה שנוצרו בקונסטרקטור 
        newUser.exampleNotes.forEach(note => noteRepository.add(note));
        
        return newUser;
    }

    login(username, password) {
        const user = userRepository.findByUsername(username);
        if (user && user.password === password) { // Plain text check [cite: 55-56]
            return user;
        }
        throw new Error("Invalid credentials");
    }
}
export const authService = new AuthService();