const express = require('express');
const router = express.Router();
const { getMemories, createMemory } = require('../controllers/memoryController');

router.route('/')
    .get(getMemories)
    .post(createMemory);

module.exports = router;
