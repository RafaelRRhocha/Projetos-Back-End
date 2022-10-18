const { BlogPost, User, Category } = require('../models');

const getAllPosts = async (_req, res) => {
  const result = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' }],
    });

  return res.status(200).json(result);
};

const getPostsById = async (req, res) => {
  const result = await BlogPost.findByPk(req.params.id, {
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' }],
    });

  if (!result) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(200).json(result);
};

module.exports = {
  getAllPosts,
  getPostsById,
};