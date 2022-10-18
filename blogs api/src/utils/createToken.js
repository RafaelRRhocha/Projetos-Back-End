const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (email) => jwt.sign({ data: email }, process.env.JWT_SECRET, { expiresIn: '1d' });