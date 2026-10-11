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
    const ip = await ExercicesService.GenerateAddressIPV6();
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


module.exports = router;

