const express = require('express');
const categories = require('../controllers/categories');
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.post('/', authToken, categories.createCategoryTable);
router.get('/', authToken, categories.getAllUsers);

module.exports = router;