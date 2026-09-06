const userServices = require('../services/userServices');
const express = require("express");
const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await userServices.login(username, password);
    if (user) {
        res.json(user);
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});


module.exports = router;
