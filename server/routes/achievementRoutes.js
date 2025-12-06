const express = require('express');
const router = express.Router();
const {
    getAchievements,
    createAchievement,
    deleteAchievement,
} = require('../controllers/achievementController');

router.route('/').get(getAchievements).post(createAchievement);

router.route('/:id').delete(deleteAchievement);

module.exports = router;
