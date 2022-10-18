const createToken = require('../utils/createToken');
const { User } = require('../models');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  if (!email) return res.status(400).json({ message: 'Some required fields are missing' });

  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = createToken(email);

  return res.status(200).json({ token });
};