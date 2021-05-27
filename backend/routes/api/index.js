// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songRouter = require('./songs')
const imageRouter = require('./images')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/songs', songRouter)

router.use('/images', imageRouter)

module.exports = router;
