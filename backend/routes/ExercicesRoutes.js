const ExercicesServices = require('../services/ExercicesServices');
const express = require("express");
const router = express.Router();

router.get('/getExercices', async (req, res) => {
    const exercices = await ExercicesServices.getAllExercices();
    if (exercices) {
        res.json(exercices);
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

router.get('/getProgress', async (req, res) => {
    const { id } = req.query;
    const progress = await ExercicesServices.progress(id);
    if (progress) {
        res.json(progress);
    } else {
        res.status(401).json({ error : 'Invalid credentials' });
    }
});

router.post('/addProgress', async (req, res) => {
    const { exercices_id , user_id } = req.body;
    const addProgress = await ExercicesServices.addProgress(exercices_id , user_id);
    if (addProgress) {
        res.json(addProgress);
    } else {
        res.status(401).json({ error : 'Invalid credentials' });
    }
});

router.get('/generateAnIp', async (req, res) => {
    const ip = await ExercicesServices.GenerateAddressIPV6();
    if (ip) {
        res.json(ip);
    } else {
        res.status(401).json({ error : 'No Ip' });

    }
});

router.get('/RandomizeIp' , async (req ,res) => {
    const ip = await ExercicesServices.GenerateFalseiP();
    if (ip) {
        res.json(ip);
    } else {
        res.status(401).json({ error : 'No Ip' });
    }
});

router.post('/InputIpv6IsCorrect' , async (req, res) => {
    const { input } = req.body;
    const answer = await ExercicesServices.IPv6isCorrect(input);
    if (answer) {
        res.json(answer);
    } else {
        res.status(401).json({ error : 'No Answer' });
}
});

router.post('/OutputIpv6IsCorrect' , async (req, res) => {
    const { ip , answer_student } = req.body;
    const answer = await ExercicesServices.CorrectIPOrNot(ip, answer_student);
    if (answer) {
        res.json(answer);
    } else {
        res.status(401).json({ error : 'No Answer' });
    }
});

router.post('/NetworkAddress' , async (req,res) => {
    const { ip , answer_student } = req.body;
    const answer = await ExercicesServices.networkAddressTrueOrFalse(ip, answer_student);
    if (answer) {
        res.json(answer);
        } else {
            res.status(401).json({ error : 'No Answer' });
        }
});

router.post('/minimZero' , async (req,res) => {
    const { ip , answer_student } = req.body;
    const answer = await ExercicesServices.minimZero(ip, answer_student);
    if (answer) {
        res.json(answer);
        } else {
            res.status(401).json({ error : 'No Answer' });
        }
});

router.get('/random4' , async (req,res) => {
    const ip = await ExercicesServices.generateiPv4();
    if (ip) {
        res.json(ip)
    } else {
        res.status(401).json({ error : 'No Ip' });
    }
});

router.get('/randommapped' , async (req,res) => {
    const ip = await ExercicesServices.ipv4MappedIp();
    if (ip) {
        res.json(ip)
    } else {
         res.status(401).json({ error : 'No Ip' });
    }
});

router.post('/convertto4' , async (req,res) => {
    const { ip , answer_student } = req.body;
    const answer = await ExercicesServices.to4(ip, studentAnswer);
    if (answer) {
        res.json(answer); 
        } else {
            res.status(401).json({ error : 'No Answer' });
        }
});




module.exports = router;

