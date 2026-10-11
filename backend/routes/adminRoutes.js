const express = require('express');
const router = express.Router();
const adminServices = require('../services/adminServices');


router.get('/users', async (req, res) => {
    try {
        const users = await adminServices.getAllUsers();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur serveur lors de la récupération des utilisateurs" });
    }
});


router.post('/register', async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        await adminServices.register(username, email, password, role);
        res.status(201).json({ message: "Utilisateur créé avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur serveur lors de la création" });
    }
});


router.delete('/user', async (req, res) => {
    try {
        const { username } = req.query;
        await adminServices.deleteUser(username);
        res.json({ message: "Utilisateur supprimé" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur serveur lors de la suppression" });
    }
});

router.get('/progress', async (req, res) => {
    try {
        const { username } = req.query;
        const progress = await adminServices.viewProgress(username);
        res.json(progress);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur serveur lors de la récupération du progrès" });
    }
});

module.exports = router;
