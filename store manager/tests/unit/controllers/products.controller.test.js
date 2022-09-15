const { expect } = require('chai');
const sinon = require('sinon');
const productsController = require('../../../src/controllers/products.controller');
const connection = require('../../../src/models/connection');

describe('Verifica a camada controller de products', () => {
  describe('', () => {
    const res = {};
    const req = {};

    afterEach(sinon.restore);

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    it('verifica se retorna todos os produtos', async () => {
      await productsController.getProductsController(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true)
    });

    it('verifica se retorna todos os produtos pelo id', async () => {
      req.params = { id: 1 };
      await productsController.getProductsByIdController(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true)
    });

    it('verifica se retorna todos os produtos e falha pelo id', async () => {
      req.params = { id: 11 };
      await productsController.getProductsByIdController(req, res);
      expect(res.status.calledWith(404)).to.be.equal(true)
    });
  });

  describe('verifica a requisição de createPostProductController', () => {
    const res = {};
    const req = {};

    afterEach(sinon.restore);

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    it('verifica se é criado corretamente', async () => {
      req.body = { name: "miranha"}
      sinon.stub(connection, 'execute').resolves([{ insertId: 2 }]);
      await productsController.createPostProductController(req, res);
      expect(res.status.calledWith(201)).to.be.equal(true)
    });
  });
});