const { expect } = require('chai');
const sinon = require('sinon');
const salesController = require('../../../src/controllers/sales.controller');

describe('Verifica a camada controller de sales', () => {

  describe('', () => {
    const res = {};
    const req = {};

    afterEach(sinon.restore);

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    it('verifica se retorna todos os produtos', async () => {
      await salesController.getAllSalesController(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true)
    });
  });

  describe('verifica a requisição de createSalesController', () => {
    const res = {};
    const req = {};

    afterEach(sinon.restore);

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      req.body = [
        {
          "productId": 1,
          "quantity": 50
        },
        {
          "productId": 2,
          "quantity": 10
        }
      ];
    })

    it('should return object array with all products', async () => {
      await salesController.createSalesController(req, res);
      expect(res.status.calledWith(201)).to.be.equal(true)
    });
  });

  describe('verifica a getAllSalesControllerById', () => {

    const res = {};
    const req = {};
    afterEach(sinon.restore);

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      req.params = { id: 1 };
    });

    it('verifica se retorna todos os produtos pelo id', async () => {
      await salesController.getAllSalesControllerById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true)
    });
  });
});