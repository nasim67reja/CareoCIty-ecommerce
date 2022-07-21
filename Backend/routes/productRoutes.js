const express = require('express');
const productController = require('../controllers/productController');
const authController = require('../controllers/authController');
const reviewRouter = require('./reviewRoutes');

//// ROUTES
const router = express.Router();

router.use('/:productId/reviews', reviewRouter);

// don't put this below /:id route
router
  .route('/top-5-cheap')
  .get(productController.aliasTopProducts, productController.getAllProducts);

router
  .route('/')
  .get(productController.getAllProducts)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    productController.createProduct
  );

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    productController.updateProduct
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    productController.deleteProduct
  );

module.exports = router;
