const ProductModel = require('../Models/Product/product.model');

const slugify = require("slugify");
const req = require('express/lib/request');

/**
 * Helper to add new Product
 */
exports.newProduct = (payload, imageFiles) => {

    const { name, description, richDescription, price, quantity, category, createdBy } = payload
    
    let image = [];
    if (imageFiles.length > 0) {
        image = imageFiles.map(file => {
            return { img: file.filename }
        })
    }

    const product = new ProductModel({
        name: name,
        slug: slugify(name),
        description,
        richDescription,
        category,
        image,
        price,
        quantity,
        createdBy
    });
    console.log("product===>", product);
    return product.save()
}