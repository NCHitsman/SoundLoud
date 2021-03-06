const express = require('express');
const asyncHandler = require('express-async-handler');
const { User, Song, Comment, Category } = require('../../db/models');
const router = express.Router();
const { singleVideoAudioUpload, singleMulterUpload } = require('../../cloudinary')

router.get('/popular', asyncHandler(async (req, res) => {
    const popular = await Song.findAll({
        order: [['views', 'DESC']],
        limit: 10,
        include: [User, Category]
    })
    popular[0].User = popular[0].User.toSafeObject()
    res.json(popular)
}))


router.get('/', asyncHandler(async (req, res) => {
    const songs = await Song.findAll({ include: [User, Category] })
    songs[0].User = songs[0].User.toSafeObject()
    res.json(songs)
}))

router.get('/:songId/comments', asyncHandler(async (req, res) => {
    const { songId } = req.params

    const comments = await Comment.findAll({
        where: {
            songId: songId
        },
        order: [['createdAt', 'ASC']],
        include: User
    })
    res.json(comments)
}))

router.post('/:songId/createComment', asyncHandler(async (req, res) => {
    const { id } = await Comment.create(req.body)
    const comment = await Comment.findByPk(id, { include: User })
    res.json(comment)
}))

router.put('/editComment/:commentId', asyncHandler(async (req, res) => {
    const { commentId } = req.params
    const comment = await Comment.findByPk(commentId)
    comment.text = req.body.text
    await comment.save()
    const songId = comment.songId
    const comments = await Comment.findAll({
        where: {
            songId: songId
        },
        order: [['createdAt', 'ASC']],
        include: User
    })
    res.json(comments)
}))

router.delete('/deleteComment/:commentId', asyncHandler(async (req, res) => {
    const { commentId } = req.params
    const comment = await Comment.findByPk(commentId)
    const songId = comment.songId

    await comment.destroy()

    const comments = await Comment.findAll({
        where: {
            songId: songId
        },
        order: [['createdAt', 'ASC']],
        include: User
    })
    res.json(comments)
}))

router.delete('/delete/:songId', asyncHandler(async (req, res) => {
    const { songId } = req.params
    const song = await Song.findByPk(songId)

    await song.destroy()

    const songs = await Song.findAll()
    res.json(songs)
}))

router.post('/upload', singleMulterUpload('song'), asyncHandler(async (req, res) => {
    try {
        const song = await singleVideoAudioUpload(req.file);
        const newSong = await Song.create(
            {
                name: req.body.name,
                link: song.url,
                createdBy: req.body.userId,
                views: 0,
                category: 1,
                cover: null,
            }
        );
        const songs = await Song.findAll({where: {createdBy: req.body.userId}, include: [User, Category]})
        res.json(songs);
    } catch (err) {
        res.status(500).json(err);
    }
}));

module.exports = router;
