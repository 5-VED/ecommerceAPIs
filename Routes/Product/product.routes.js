const express = require('express');
const router = express.Router();
const productController = require('../../Controllers/Product/product.controller');
const upload = require('../../Middlewares/image-upload');

/**
 * Route of API to Create Product
 */
router.post('/product/create', upload.array('image'),productController.addNewProduct);

module.exports = router
