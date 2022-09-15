const serviceProduct = require('../services/products.service');

const getProductsController = async (_req, res) => {
  const response = await serviceProduct.getProductsService();
  res.status(200).json(response);
};

const getProductsByIdController = async (req, res) => {
  const { id } = req.params;
  const response = await serviceProduct.getProductByIdService(id);
  if (!response[0]) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(response[0]);
};

const createPostProductController = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await serviceProduct.postProductService(name);
  if (type) return res.status(type).json({ message });
  res.status(201).json(message);
};

const updateProductController = async (req, res) => { 
  const { name } = req.body;
  const { id } = req.params;

  const messageName = { message: '"name" is required' };
  const messageLength = { message: '"name" length must be at least 5 characters long' };
  const messageIdNotFound = { message: 'Product not found' };

  if (!name) { return res.status(400).json(messageName); }
  if (name.length < 5) { return res.status(422).json(messageLength); }

  const [changeProduct] = await serviceProduct.updateProductService(name, id);

  if (!changeProduct) { return res.status(404).json(messageIdNotFound); }

  return res.status(200).json(changeProduct);
};

const deleteProductController = async (req, res) => {
  const { id } = req.params;
  const response = await serviceProduct.getProductByIdService(id);
  if (!response[0]) { return res.status(404).json({ message: 'Product not found' }); }
  
  await serviceProduct.deleteProductService(id);
  return res.sendStatus(204);
};

module.exports = {
  getProductsController,
  getProductsByIdController,
  createPostProductController,
  updateProductController,
  deleteProductController,
};