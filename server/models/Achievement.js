const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add an achievement title'],
        trim: true,
    },
    description: {
        type: String,
        default: '',
    },
    date: {
        type: Date,
        default: Date.now,
    },
    category: {
        type: String,
        enum: ['certification', 'award', 'milestone'],
        default: 'milestone',
    },
    imageUrl: {
        type: String,
        default: '',
    },
    credentialUrl: {
        type: String,
        default: '',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Achievement', achievementSchema);
