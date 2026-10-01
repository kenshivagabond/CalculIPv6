const userDAO = require('../model/userDao');

class adminServices {

    constructor() {
        this.userDAO = userDAO;
    }

    async register(username,email,password,role) {
        return this.userDAO.register(username,password,role);
    }

    async deleteUser(username) {
        return this.userDAO.deleteUser(username);
    }

    async updateUser(username,email,password,role){

        return this.userDAO.updateUser(username,email,password,role);
    }

    async getAllUsers(){

        return this.userDAO.getAllUsers();
    }

    async findUserByUsername(username){

        return this.userDAO.findUserByUsername(username);
    }

    async viewProgress(username) {
        return this.userDAO.viewProgress(username);
    }

  

}

module.exports = new adminServices();
