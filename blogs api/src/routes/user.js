const express = require('express');
const user = require('../controllers/user');
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.get('/', authToken, user.getAllUsers);
router.get('/:id', authToken, user.getUsersById);

module.exports = router;