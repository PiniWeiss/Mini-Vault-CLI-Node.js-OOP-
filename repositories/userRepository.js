import { users } from '../data/users.js';

class UserRepository {
    findByUsername(username) {
        return users.find(u => u.username === username); // [cite: 40]
    }
    exists(username) {
        return users.some(u => u.username === username); // [cite: 41]
    }
    add(user) {
        users.push(user); // [cite: 42]
    }
}
export const userRepository = new UserRepository();