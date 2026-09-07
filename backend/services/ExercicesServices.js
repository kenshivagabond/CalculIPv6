const exercicesDAO = require('../model/ExercicesDao');

class ExercicesServices {

    constructor() {
        this.exercicesDAO = exercicesDAO;
    }

    async getAllExercices(){
        return this.exercicesDAO.getAllExercices();
    }

    async progress(user_id){
	return this.exercicesDAO.progress(user_id);
    }






}

module.exports = new ExercicesServices();

