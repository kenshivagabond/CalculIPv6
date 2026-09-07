const exerciesDAO = require('../model/ExercicesDao');

class exerciesServices {

    constructor() {
        this.exerciesDAO = exerciesDAO;
    }

    async getAllExercices(){
        return exerciesDAO.getAllExercices;
    }






}⏎

module.exports = new exericesServices();

