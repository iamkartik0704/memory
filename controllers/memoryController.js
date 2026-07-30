const Memory = require('../models/Memory');

// @desc    Get all memories
// @route   GET /api/memories
// @access  Public
const getMemories = async (req, res) => {
    try {
        const memories = await Memory.find().sort({ createdAt: -1 }); // Newest first
        res.json({
            message: 'success',
            data: memories
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// @desc    Add a new memory
// @route   POST /api/memories
// @access  Public
const createMemory = async (req, res) => {
    try {
        const { name, roleCategory, customRoleTitle, memoryText } = req.body;

        if (!name || !roleCategory || !memoryText) {
            return res.status(400).json({ error: 'Name, Role Category, and Memory Text are required fields.' });
        }

        const validCategories = ['Organizer', 'Coordinator', 'Subcoordinator'];
        if (!validCategories.includes(roleCategory)) {
            return res.status(400).json({ error: 'Invalid Role Category. Must be Organizer, Coordinator, or Subcoordinator.' });
        }

        const newMemory = new Memory({
            name,
            roleCategory,
            customRoleTitle,
            memoryText
        });

        const savedMemory = await newMemory.save();
        
        res.status(201).json({
            message: 'Memory pinned successfully',
            data: savedMemory
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getMemories,
    createMemory
};
