const joi = require('joi');
const productsService = require('../services/products.service');

const createSalesSchema = joi.array().items(
  joi.object({
    productId: joi.number().min(1).required().messages({
      'any.required': '400??"productId" is required',
    }),
    quantity: joi.number().min(1).required().messages({
      'any.required': '400??"quantity" is required',
      'number.min': '422??"quantity" must be greater than or equal to 1',
    }),
  }),
);

const validateSales = (req, res, next) => {
  const { error } = createSalesSchema.validate([...req.body]);
  if (error) {
    const [code, message] = error.message.split('??');
    return res.status(Number(code)).json({ message });
  }
  next();
};

const validateIdSales = async (req, res, next) => {
  const db = await productsService.getProductsService();
  const idsToSale = req.body.map((element) => element.productId);
  const idsDb = db.map((element) => element.id);

  const productNotFound = idsToSale.map((id) => {
  const verifyIdsDb = idsDb.some((element) => element === id);
    if (!verifyIdsDb) { return 'Product not found'; }
    return 'Product found';
  });

  const notFound = productNotFound.some((element) => element === 'Product not found');
  if (notFound) {
    return res.status(404).json({ message: 'Product not found' });
  }

  next();
};

module.exports = { validateSales, validateIdSales };