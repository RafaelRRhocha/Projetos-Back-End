const express = require('express');

const productionController = require('../controllers/products.controller');
const { validateName } = require('../middlewares/validationName');

const router = express.Router();

router.get('/', productionController.getProductsController);

router.post('/', validateName, productionController.createPostProductController);

router.get('/:id', productionController.getProductsByIdController);

router.put('/:id', productionController.updateProductController);

router.delete('/:id', productionController.deleteProductController);

module.exports = router;