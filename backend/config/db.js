const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const dbPath = path.join(__dirname, 'db.sqlite3');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Failed to open database:', err.message);
    }
});

// Promisify database methods to support mysql2-like [rows] pattern
db.query = function (sql, params = []) {
    return new Promise((resolve, reject) => {
        const queryParams = Array.isArray(params) ? params : [params];
        db.all(sql, queryParams, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve([rows]);
            }
        });
    });
};

db.execute = function (sql, params = []) {
    return db.query(sql, params);
};

// Wrap db.run to support both promise-based (when no callback is provided) and callback-based usage
const originalRun = db.run;
db.run = function (sql, params = [], callback) {
    if (typeof params === 'function') {
        callback = params;
        params = [];
    }
    if (typeof callback === 'function') {
        return originalRun.call(db, sql, params, callback);
    }
    return new Promise((resolve, reject) => {
        originalRun.call(db, sql, params, function (err) {
            if (err) {
                reject(err);
            } else {
                resolve(this);
            }
        });
    });
};

module.exports = db;
