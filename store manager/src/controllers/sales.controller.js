const getSalesService = require('../services/sales.service');

const getAllSalesController = async (_req, res) => {
  const products = await getSalesService.getAllSalesService();
  return res.status(200).json(products);
};

const getAllSalesControllerById = async (req, res) => {
  const products = await getSalesService.getAllSalesServiceById(req.params.id);
  if (products.length < 1) return res.status(404).json({ message: 'Sale not found' });
  return res.status(200).json(products);
};

const createSalesController = async (req, res) => {
  const products = await getSalesService.createSalesService(req.body);
  return res.status(201).json(products);
};

module.exports = { getAllSalesController, getAllSalesControllerById, createSalesController };
