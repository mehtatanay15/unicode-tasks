import express from 'express';
import fetch from 'node-fetch';
const app = express();

// Route to get all characters
app.get('/characters', async (req, res) => {
    const reply = await fetch('https://hp-api.onrender.com/api/characters');
    const character = await reply.json();
    res.status(200).json(character);
});

// Route to get all spells
app.get('/spells', async (req, res) => {
    const reply = await fetch('https://hp-api.onrender.com/api/spells'); 
    const spell = await reply.json();
    res.status(200).json(spell);
});

// Route to get all Hogwarts staff
app.get('/characters/staff', async (req, res) => {
    const reply = await fetch('https://hp-api.onrender.com/api/characters/staff'); 
    const staff = await reply.json();
    res.status(200).json(staff);
});

// Route to get all Hogwarts students
app.get('/characters/students', async (req, res) => {
    const reply = await fetch('https://hp-api.onrender.com/api/characters/students'); 
    const student = await reply.json();
    res.status(200).json(student);
});

// Start the server
app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});
