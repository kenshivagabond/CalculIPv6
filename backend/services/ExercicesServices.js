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

    async GenerateAddressIPV6(){
        return this.exercicesDAO.GenerateAdressIPV6();
    }

    async IPv6isCorrect(ipv6Address){
        return this.exercicesDAO.IPv6isCorrect(ipv6Address);
    }

    async addProgress(exercices_id , id_utilisateur){
        return this.exercicesDAO.addProgress(exercices_id , id_utilisateur);
    }

    async GenerateFalseiP(){
        return this.exercicesDAO.GenerateFalseiP();
    }

    async CorrectIPOrNot(ip_address, studentAnswer){
        return this.exercicesDAO.CorrectIPOrNot(ip_address, studentAnswer);
    }

    async networkAddressTrueOrFalse(generateAddress, studentAnswer){
        return this.exercicesDAO.networkAddressTrueOrFalse(generateAddress, studentAnswer);
    }

    async minimZero(generateAddress, studentAnswer){
        return this.exercicesDAO.minimZero(generateAddress, studentAnswer);
    }

    async generateiPv4(){
        return this.exercicesDAO.generateiPv4();
    }

    async to4(ipv6Address, studentAnswer){
        return this.exercicesDAO.to4(ipv6Address, studentAnswer);
    }

    async to6(ipv4Address, studentAnswer){
        return this.exercicesDAO.to6(ipv4Address, studentAnswer);
    }

    async ipv4MappedIp(){
        return this.exercicesDAO.ipv4MappedIp();
    }

   

    





}

module.exports = new ExercicesServices();

