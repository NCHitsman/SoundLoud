
const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { singleMulterUpload, singlePublicFileUpload } = require('../../cloudinary');
const { Song, User, Category } = require('../../db/models');

router.post('/', singleMulterUpload('image'), asyncHandler(async (req, res) => {
  try {
    const image = await singlePublicFileUpload(req.file);
    const song = await Song.findByPk(req.body.songId, {include: User, Category});
    song.cover = image.url;
    await song.save()
    res.json(song);
  } catch (err) {
    res.status(500).json(err);
  }
}));

module.exports = router;
