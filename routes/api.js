const express = require('express');
const router = express.Router();

const autoresRouter = require('./api/autor.route');
const postsRouter = require('./api/post.route');

router.use('/autor', autoresRouter);
router.use('/post', postsRouter);

module.exports = router;