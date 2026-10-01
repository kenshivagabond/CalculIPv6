const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;


app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, 'frontend')));

const authRouter = require('./backend/routes/userRoutes');
const ExercicesRouter = require('./backend/routes/ExercicesRoutes');
const adminRouter = require('./backend/routes/adminRoutes');
app.use('/api',authRouter);
app.use('/api',ExercicesRouter);
app.use('/api/admin',adminRouter);

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'login_page.html'));
});

app.get('/exercices', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'exercices.html'));
});

app.get('/profile', (req,res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'profile.html'));
});

app.get('/admin' , (req,res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'admin.html'));
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
