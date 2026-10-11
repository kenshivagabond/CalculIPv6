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

    async GenerateAdressIPV6(){
        return this.exercicesDAO.GenerateAdressIPV6();
    }

    





}

module.exports = new ExercicesServices();

