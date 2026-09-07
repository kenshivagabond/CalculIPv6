const db = require('../config/db');
const bcrypt = require('bcrypt');
const User = require('./User');

class UserDao extends User {


    async connection(username, password) {
        
	const users = await db.query("SELECT * FROM users WHERE username = ?", [username]);
	
        if (users && users.length > 0) {
	    const user = users[0][0];
	    console.log(user.hashed_password);
            const isMatch = await bcrypt.compare(password, user.hashed_password);
            if (isMatch) {
                return user;
            }
        }
        return null;
    }

    async hashPassword(password, saltRounds = 12) {
        const hash = await bcrypt.hash(password, saltRounds);
        return hash;
    }

    async register(username, email, password, role) {
        const hashedPassword = await this.hashPassword(password);
        const [result] = await db.query('INSERT INTO users (username,email,hashed_password,role) VALUES (?,?,?,?)', [username, email, hashedPassword, role]);
    }

    async deleteUser(username) {
        const [result] = await db.query('DELETE FROM users WHERE username = ?', username)
    }

    async updateUser(username, email, hashed_password, role) {
        const hashedPassword = await this.hashPassword(hashed_password);
        const [result] = await db.query('UPDATE users SET username = ?,email = ?,hashed_password = ?,role = ? WHERE username = ?', [username, email, hashedPassword, role, username]);
    }

    async getAllUsers() {
        const [result] = await db.query('SELECT * FROM users')
        return result;
    }

    async findUserByUsername(username) {
        const [result] = await db.query('SELECT * FROM users WHERE username = ?', username)
        return result[0];
    }

    async viewProgress(username) {
        const [result] = await db.query('SELECT * FROM progress WHERE username = ?', username)
        return result;
    }

    async isAdmin(username) {
        const [result] = await db.query('SELECT role FROM users WHERE username = ?', username)
        return result[0].role === 'admin';
    }


}

module.exports = new UserDao();
