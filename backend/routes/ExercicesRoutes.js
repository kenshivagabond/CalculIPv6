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


module.exports = router;

