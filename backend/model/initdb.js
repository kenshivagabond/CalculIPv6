const db = require('../config/db');

async function initDB() {
    const users = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL,
    hashed_password TEXT NOT NULL,
    role TEXT NOT NULL
    )`
    const exercices = `CREATE TABLE IF NOT EXISTS exercices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    niveau TEXT NOT NULL
    )`
    const progress = `CREATE TABLE IF NOT EXISTS progress (
    id_utilisateur INTEGER,
    id_exercice INTEGER,
    is_correct BOOLEAN NOT NULL,
    did_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_utilisateur, id_exercice),
    FOREIGN KEY (id_utilisateur) REFERENCES users(id),
    FOREIGN KEY (id_exercice) REFERENCES exercices(id)
    )`

    

    await db.run(insert_admin);
}

initDB();
