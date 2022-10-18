const express = require('express');
const loginAuth = require('../middlewares/loginAuth');

const router = express.Router();

router.post('/', loginAuth);

module.exports = router;