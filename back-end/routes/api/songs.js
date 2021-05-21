const express = require('express');
const asyncHandler = require('express-async-handler');
const { User, Song, Comment, Categories } = require('../../db/models');
const router = express.Router();

router.get('/popular', asyncHandler(async (req, res) => {
    const popular = await Song.findAll({
        order: [['views', 'DESC']],
        limit: 10,
        include: User
    })
    popular[0].User = popular[0].User.toSafeObject()
    res.json(popular)
}))


router.get('/', asyncHandler(async (req, res) => {
    const songs = await Song.findAll({include: User})
    songs[0].User = songs[0].User.toSafeObject()
    res.json(songs)
}))

module.exports = router;
