const connection = require('./connection');

const getAllProductsFromSql = async () => {
  const [results] = await connection.execute(
    'SELECT * FROM products',
  );
  return results;
};

const getProductsByIdFromSql = async (id) => {
  const [results] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [id],
  );
  return results;
};

const postProductsInSql = async (name) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );
  const product = { id: result.insertId, name };
  return product;
};

const updateProductModels = async (name, id) => {
  await connection.execute('UPDATE StoreManager.products SET name = (?) WHERE id = (?)',
    [name, id]);
  const product = await getProductsByIdFromSql(id);
  return product;
};

const deleteProductModels = async (id) => {
  await connection.execute('DELETE FROM StoreManager.products WHERE id = (?)', [id]);
};

module.exports = {
  getAllProductsFromSql,
  getProductsByIdFromSql,
  postProductsInSql,
  updateProductModels,
  deleteProductModels,
};