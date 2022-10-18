const { User } = require('../models');

const excludePass = { attributes: { exclude: ['password'] } };

const getAllUsers = async (_req, res) => res.status(200).json(await User.findAll(excludePass));

const getUsersById = async (req, res) => {
  const userById = await User.findByPk(req.params.id, excludePass);
  if (!userById) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(userById);
};

module.exports = {
  getAllUsers,
  getUsersById,
};