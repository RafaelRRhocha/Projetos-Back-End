const { Category } = require('../models');

const createCategoryTable = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const createdCategory = await Category.create({ name });

  return res.status(201).json(createdCategory);
};

const getAllUsers = async (_req, res) => res.status(200).json(await Category.findAll());

module.exports = {
  createCategoryTable,
  getAllUsers,
};