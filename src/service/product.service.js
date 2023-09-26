const Product = require('../model/product.model');

const findProductByIdService = (id) => {
    return Product.findById(id);
}

const findAllProductService = () => {
    return Product.find();
}

const createProductService = (body) => {
    return Product.create(body);
}

const updateProductService = (id, body) => {
    return Product.findByIdAndUpdate(id, body, { returnDocument: "after" });
}

const deleteProductService = (id) => {
    return Product.findByIdAndRemove(id);
}

module.exports = {
    findProductByIdService,
    findAllProductService,
    createProductService,
    updateProductService,
    deleteProductService
}