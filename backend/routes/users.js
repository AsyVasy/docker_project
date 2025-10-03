const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

// 🟢 GET all users
router.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
    }
});

// 🔵 GET one user by ID
router.get('/:id', async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de l’utilisateur' });
    }
});

// 🟡 CREATE a user
router.post('/', async (req, res) => {
    const { name, email } = req.body;
    try {
        const newUser = await prisma.user.create({
            data: { name, email },
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création de l’utilisateur' });
    }
});

// 🟠 UPDATE a user
router.put('/:id', async (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;

    try {
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { name, email },
        });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour de l’utilisateur' });
    }
});

// 🔴 DELETE a user
router.delete('/:id', async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        await prisma.user.delete({ where: { id: userId } });
        res.status(204).send(); // No Content
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression de l’utilisateur' });
    }
});

module.exports = router;
