const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    if (!req.headers.authorization) return res.status(401).json({ message: 'Token not found' });
    jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  } next();
};