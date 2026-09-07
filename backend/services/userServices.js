const userDAO = require('../model/userDao');

class userServices {

    constructor() {
        this.userDAO = userDAO;
    }

    async login(username, password) {
        return this.userDAO.connection(username, password);
    }

}

module.exports = new userServices();
