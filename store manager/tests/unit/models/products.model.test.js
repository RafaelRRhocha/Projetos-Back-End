const { expect } = require('chai');
const ProductsModel = require('../../../src/models/products.model');
const connection = require('../../../src/models/connection');
const sinon = require('sinon');

const mockProducts = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  },
];

describe('Verifica a camada model de products', () => {
  describe('verifica a getAllProductsFromSql', () => {
    afterEach(sinon.restore);
    it('', async () => {
      sinon.stub(connection, 'execute').resolves([mockProducts]);
      const response = await ProductsModel.getAllProductsFromSql();
      expect(response).to.deep.equal(mockProducts);
    })
  });

  describe('verifica a getProductsByIdFromSql', () => {
    afterEach(sinon.restore);
    it('', async () => {
      sinon.stub(connection, 'execute').resolves([[{
        "id": 3,
        "name": "Escudo do Capitão América"
      }]]);
      const [response] = await ProductsModel.getProductsByIdFromSql(3);
      expect(response).to.deep.equal(mockProducts[2]);
    })
  });
});