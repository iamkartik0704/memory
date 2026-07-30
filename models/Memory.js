const mongoose = require('mongoose');

const memorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    roleCategory: {
        type: String,
        required: true,
        enum: ['Organizer', 'Coordinator', 'Subcoordinator'],
    },
    customRoleTitle: {
        type: String,
    },
    memoryText: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Memory = mongoose.model('Memory', memorySchema);

module.exports = Memory;
