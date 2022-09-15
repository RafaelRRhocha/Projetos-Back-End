const getSales = require('../models/sales.model');

const getAllSalesService = async () => {
  const products = await getSales.getAllSalesFromSql();
  return products;
};

const getAllSalesServiceById = async (id) => {
  const [sale] = await getSales.getSalesByIdFromSql(id);
  if (!sale) return null;
  return sale;
};

const createSalesService = async (item) => {
  const id = await getSales.createSalesModel(item);
  return { id, itemsSold: item };
};

module.exports = { getAllSalesService, getAllSalesServiceById, createSalesService };
