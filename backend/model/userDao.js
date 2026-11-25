const db = require('../config/db');
const bcrypt = require('bcrypt');
const User = require('./User');

class UserDao extends User {


    async connection(username, password) {
        const [rows] = await db.query("SELECT * FROM users WHERE username = ?", [username]);
        const user = Array.isArray(rows) ? rows[0] : rows;

        if (!user || !user.hashed_password) {
            return null;
        }

        const isMatch = await bcrypt.compare(password, user.hashed_password);
        return isMatch ? user : null;
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
        const result = await db.query(
            `SELECT p.id_utilisateur, p.id_exercice, p.is_correct, p.did_at
            FROM progress p
            JOIN users u ON p.id_utilisateur = u.id
            WHERE u.username = ?
            ORDER BY p.did_at DESC`,
            [username]
        );

        const rows = Array.isArray(result) && Array.isArray(result[0]) ? result[0] : result;
        return Array.isArray(rows) ? rows : [];
    }

    async isAdmin(username) {
        const [result] = await db.query('SELECT role FROM users WHERE username = ?', username)
        return result[0].role === 'admin';
    }


}

module.exports = new UserDao();
