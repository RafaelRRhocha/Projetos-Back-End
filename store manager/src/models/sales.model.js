const connection = require('./connection');

const getAllSalesFromSql = async () => {
  const [products] = await connection
    .execute(`SELECT sale_id as saleId, date, product_id as productId, quantity 
      FROM StoreManager.sales_products as sp
      JOIN StoreManager.sales as s
      ON sp.sale_id = s.id
      ORDER BY sale_id, product_id;`);
  return products;
};

const getSalesByIdFromSql = async (id) => {
  const products = `SELECT date, product_id as productId, quantity 
      FROM StoreManager.sales_products as sp
      JOIN StoreManager.sales as s
      ON sp.sale_id = s.id WHERE sp.sale_id = ?
      ORDER BY sale_id, product_id; `;
  const saleData = await connection.execute(products, [id]);
  return saleData;
};

const createSalesModel = async (item) => {
  const [{ insertId }] = await connection
    .execute('INSERT INTO StoreManager.sales (date) VALUES (NOW())');
  await Promise.all(item.map(async ({ productId, quantity }) => {
    await connection.execute(`
      INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
      VALUES (?, ?, ?)`, [insertId, productId, quantity]);
  }));
  return insertId;
};

module.exports = { getAllSalesFromSql, getSalesByIdFromSql, createSalesModel };