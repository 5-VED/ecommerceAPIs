
const productHelper = require('../../Helper/product.helper');
const logger = require('../../lib/logger');
const { StatusCodes } = require('http-status-codes');


/**
 * API to Add new Product
 */
exports.addNewProduct = async (req, res) => {
    try {
        const result = await productHelper.newProduct(req.body, req.files);
        logger.info("Product added Successfully");
        return res.status(StatusCodes.OK).json({ data: result, message: 'Product added Successfully' })

    } catch (error) {
        logger.error("Error adding Product")
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error Adding Product" })
    }
}