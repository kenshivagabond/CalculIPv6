class User {
    constructor(username, email, hashed_password, role = 'user') {
        this.username = username;
        this.hashed_password = hashed_password;
        this.email = email;
        this.role = role;
    }
}

module.exports = User;
