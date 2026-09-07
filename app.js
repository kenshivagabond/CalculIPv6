const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;


app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, 'frontend')));

const authRouter = require('./backend/routes/userRoutes');
const ExercicesRouter = require('./backend/routes/ExercicesRoutes')
app.use('/api',authRouter);
app.use('/api',ExercicesRouter);

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'login_page.html'));
});

app.get('/exercices', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'exercices.html'));
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
