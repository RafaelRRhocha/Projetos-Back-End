const express = require('express');
const { getAllPosts, getPostsById } = require('../controllers/post');
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.get('/', authToken, getAllPosts);
router.get('/:id', authToken, getPostsById);

module.exports = router;