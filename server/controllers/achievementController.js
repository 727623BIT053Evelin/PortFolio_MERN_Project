const Achievement = require('../models/Achievement');

// @desc    Get all achievements
// @route   GET /api/achievements
// @access  Public
const getAchievements = async (req, res) => {
    try {
        const achievements = await Achievement.find().sort({ date: -1 });
        res.status(200).json({
            success: true,
            count: achievements.length,
            data: achievements,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
};

// @desc    Create new achievement
// @route   POST /api/achievements
// @access  Private (for admin)
const createAchievement = async (req, res) => {
    try {
        const achievement = await Achievement.create(req.body);

        res.status(201).json({
            success: true,
            data: achievement,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

// @desc    Delete achievement
// @route   DELETE /api/achievements/:id
// @access  Private (for admin)
const deleteAchievement = async (req, res) => {
    try {
        const achievement = await Achievement.findByIdAndDelete(req.params.id);

        if (!achievement) {
            return res.status(404).json({
                success: false,
                error: 'Achievement not found',
            });
        }

        res.status(200).json({
            success: true,
            data: {},
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
};

module.exports = {
    getAchievements,
    createAchievement,
    deleteAchievement,
};
