const express = require('express');

const controller = require('../controllers/sales.controller');
const middle = require('../middlewares/validationSale');

const router = express.Router();

router.get('/', controller.getAllSalesController);

router.post('/', middle.validateSales, middle.validateIdSales, controller.createSalesController);

router.get('/:id', controller.getAllSalesControllerById);

module.exports = router;
