const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

const app = express();
const port = 3000;
const userRoutes = require('./routes/users');

app.use(express.json());
app.use(cors());
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use('/api/users', userRoutes);

// Connexion à MySQL
const dbConfig = {
    host: 'mysql_db', // nom du service MySQL défini dans docker-compose.yml
    user: 'user',
    password: 'password',
    database: 'myappdb',
};

function connectWithRetry() {
    const connection = mysql.createConnection(dbConfig);

    connection.connect((err) => {
        if (err) {
            console.error('❌ Erreur de connexion MySQL :', err.message);
            setTimeout(connectWithRetry, 2000); // Réessaye après 2 sec
        } else {
            console.log('✅ Connecté à MySQL');

            // Routes
            app.get('/', (req, res) => {
                res.send('Hello depuis Node.js + Express + MySQL 🚀');
            });

            app.listen(port, () => {
                console.log(`✅ Serveur Express lancé sur http://localhost:${port}`);
            });
        }
    });
}

app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

app.post('/users', async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Nom et email sont requis.' });
    }

    try {
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
            },
        });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Erreur lors de la création de l’utilisateur :', error);
        res.status(500).json({ error: 'Erreur serveur ou email déjà utilisé.' });
    }
});



connectWithRetry();

