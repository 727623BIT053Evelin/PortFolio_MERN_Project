const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a project title'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Please add a project description'],
    },
    technologies: {
        type: [String],
        required: true,
    },
    imageUrl: {
        type: String,
        default: '',
    },
    projectUrl: {
        type: String,
        default: '',
    },
    githubUrl: {
        type: String,
        default: '',
    },
    featured: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Project', projectSchema);
