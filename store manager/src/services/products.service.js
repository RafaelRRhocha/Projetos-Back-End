const productsModel = require('../models/products.model');

const getProductsService = async () => {
  const products = await productsModel.getAllProductsFromSql();
  return products;
};

const getProductByIdService = async (id) => {
  const products = await productsModel.getProductsByIdFromSql(id);
  return products;
};

const postProductService = async (name) => {
  const productPosted = await productsModel.postProductsInSql(name);
  return { type: null, message: productPosted };
};

const updateProductService = async (name, id) => {
  const productChanged = await productsModel.updateProductModels(name, id);
  return productChanged;
};

const deleteProductService = async (id) => {
  await productsModel.deleteProductModels(id);
};

module.exports = {
  getProductsService,
  getProductByIdService,
  postProductService,
  updateProductService,
  deleteProductService,
};