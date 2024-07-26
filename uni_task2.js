import express from 'express';
import fetch from 'node-fetch';
const app = express();

// get all characters
app.get('/characters', async (req, res) => {
    const reply = await fetch('https://hp-api.onrender.com/api/characters');
    const character = await reply.json();
    res.status(200).json(character);
});

// get all spells
app.get('/spells', async (req, res) => {
    const reply = await fetch('https://hp-api.onrender.com/api/spells'); 
    const spell = await reply.json();
    res.status(200).json(spell);
});

// get all hogwarts staff
app.get('/characters/staff', async (req, res) => {
    const reply = await fetch('https://hp-api.onrender.com/api/characters/staff'); 
    const staff = await reply.json();
    res.status(200).json(staff);
});

// get all hogwarts students
app.get('/characters/students', async (req, res) => {
    const reply = await fetch('https://hp-api.onrender.com/api/characters/students'); 
    const student = await reply.json();
    res.status(200).json(student);
});

//get character by id
app.get('/characters/:id', async (req, res) => {
    const reply= await fetch('https://hp-api.onrender.com/api/characters');
    const characters = await reply.json();
    const specificcharacter = await characters.find(character => character.id === req.params.id);
    res.status(200).json(specificcharacter);
});

// Start the server
app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});
