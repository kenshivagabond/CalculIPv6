const exerciesDAO = require('../model/ExercicesDao');

class exerciesServices {

    constructor() {
        this.exercicesDAO = exercicesDAO();
    }

    async getAllExercices(){
        return exercicesDAO.getAllExercices();
    }






}⏎

module.exports = new exericesServices();

