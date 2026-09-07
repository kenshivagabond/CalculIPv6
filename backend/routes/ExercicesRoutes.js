const ExercicesServices = require('../services/ExercicesServices');
const express = require("express");
const router = express.Router();

router.get('/getAllExercices', async (req, res) => {
    const exercices = await ExercicesServices.getAllExercices();
    if (exercices) {
        res.json(user);
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});


module.exports = router;
