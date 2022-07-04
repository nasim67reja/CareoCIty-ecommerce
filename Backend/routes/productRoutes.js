const express = require('express');
const productController = require('../controllers/productController');

//// ROUTES
const router = express.Router();

// don't put this below /:id route
router
  .route('/top-5-cheap')
  .get(productController.aliasTopProducts, productController.getAllProducts);

router
  .route('/')
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
