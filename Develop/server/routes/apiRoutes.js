const express = require('express');
const router = express.Router();
const { saveNote, getAllNotes } = require('../db');


router.post('/notes', async (req, res) => {
    try {
        await saveNote(req.body);
        res.sendStatus(200);
    } catch (error) {
        console.error('Error saving note:', error);
        res.sendStatus(500);
    }
});


router.get('/notes', async (req, res) => {
    try {
        const notes = await getAllNotes();
        res.json(notes);
    } catch (error) {
        console.error('Error retrieving notes:', error);
        res.sendStatus(500);
    }
});

module.exports = router;
