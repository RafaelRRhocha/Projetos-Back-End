const { expect } = require('chai');
const sinon = require('sinon');
const productsServices = require('../../../src/services/products.service');
const connection = require('../../../src/models/connection');

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

describe('ProductsServices should exist and work', () => {
  describe('request on getProductsService function', () => {
    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves([mockProducts])
    });

    afterEach(async () => {
      connection.execute.restore()
    });

    it('verifica se retorna os produtos corretamente', async () => {
      const response = await productsServices.getProductsService();
      expect(response).to.deep.equal(mockProducts);
    })
  });
});