// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songRouter = require('./songs')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/songs', songRouter)

module.exports = router;
