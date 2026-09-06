const db = require("../config/db.js")
const Exercice = require("./Exercices.js")
const IPv6Address = require('ip-address').Address6;
const ipaddr = require('ipaddr.js');

class ExercicesDao extends Exercice {


    async getAllExercices() {
        const res = await db.all('SELECT * FROM exercice');
	return res;
    }

    async IPv6isCorrect(ipv6Address) {
        return IPv6Address.isValid(ipv6Address);
    }

    async GenerateAdressIPV6() {
        const blocks = [];

        for (let i = 0; i < 8; i++) {
            blocks.push(bin2hex(random_bytes(2)));
        }

        return blocks.toString() + "/" + Math.floor(Math.random() * 128 + 1).toString()
    }

    async networkAddressTrueOrFalse(generateAddress, studentAnswer) {
        const answer = ipaddr.IPv6.networkAddressFromCIDR(generateAddress).toString();
        return answer == studentAnswer;
    }

    async minimZero(generateAddress, studentAnswer) {
        const answer = ipaddr.parse(generateAddress).toRFC5952String();
        return answer == studentAnswer;
    }

    async GenerateFalseiP() {
        let generated_ip_address = await this.GenerateAdressIPV6();

        const typesFalseExercices = ['invalid_char', 'too_much_block', 'double_colon', 'missing_block', 'valid_ip'];
        const random_type = typesFalseExercices[Math.floor(Math.random() * typesFalseExercices.length)];
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        const randomblock = bin2hex(random_bytes(2));

        switch (random_type) {
            case 'invalid_char': {
                generated_ip_address = generated_ip_address.replace(/[^0-9a-f]/gi, function (match) {
                    return letters[Math.floor(Math.random() * letters.length)];
                });
                return generated_ip_address;
            }

            case 'too_much_block': {
                let split_addr = generated_ip_address.split(":");
                split_addr.push(randomblock);
                return split_addr.join(":");
            }

            case 'double_colon': {
                let str = generated_ip_address.replace(/:/g, "::");
                return str;
            }

            case 'missing_block': {
                let split_addr = generated_ip_address.split(":");
                split_addr.splice(1, 1);
                return split_addr.join(":");
            }

            case 'valid_ip':
                return generated_ip_address;
        }
        return { generated_ip_address: generated_ip_address, typeExercice: random_type };
    }

    async CorrectIPOrNot(ip_address, studentAnswer) {
        if (this.IPv6isCorrect(ip_address) == studentAnswer) {
            return true;
        }
        else {
            return false;
        }

    }

    async generateiPv4() {
        const addr = [];
        for (let i = 0; i < 4; i++) {
            addr.push(Math.floor(Math.random() * 256));
        }

        return addr.join('.');

    }

    async to4(ipv6Address, studentAnswer) {
        const answer = ipaddr.parse(ipv6Address).toIPv4Address().toString();
        return answer == studentAnswer;
    }

    async to6(ipv4Address, studentAnswer) {
        const answer = ipaddr.parse(ipv4Address).toIPv4MappedAddress().toString();
        return answer == studentAnswer;
    }

    async range(ipv6Address, studentAnswer) {
        const answer = ipaddr.parse(ipv6Address).range();
        return answer == studentAnswer;
    }

    async MaxZero(ipv6Address, studentAnswer) {
        const answer = ipaddr.parse(ipv6Address).toFixedLengthString();
        return answer == studentAnswer;
    }







}

module.exports = new ExercicesDao();
