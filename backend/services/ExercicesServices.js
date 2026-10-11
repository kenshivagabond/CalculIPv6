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

    async IPv6isCorrect(ipv6Address){
        return this.exercicesDAO.IPv6isCorrect(ipv6Address);
    }

    async addProgress(exercices_id , id_utilisateur){
        return this.exercicesDAO.addProgress(exercices_id , id_utilisateur);
    }

    





}

module.exports = new ExercicesServices();

