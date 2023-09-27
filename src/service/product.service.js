const Product = require('../model/product.model');

const findProductByIdService = (id) => {
    return Product.findById(id);
}

const findAllProductService = (limit, offset) => {
    return Product.find().limit(limit).skip(offset);
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

const addCategoriaProdutoService = (id, categoria) => {
    return ProductModel.findByIdAndUpdate(
        { 
            _id: id 
        }, 
        { 
            $push: 
            { 
                categorias: {
                    _id: categoria._id,
                    dataCriacao: categoria.dataCriacao
                },
            },
        },
        {
            includeResultMetadata: true,
        }
    );
}

const removeCategoriaProdutoService = (id, categoria) => {
    return ProductModel.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull: {
                categorias: {
                    _id: categoria._id,
                },
            },
        },
        {
            includeResultMetadata: true,
        }
    );
}

module.exports = {
    findProductByIdService,
    findAllProductService,
    createProductService,
    updateProductService,
    deleteProductService,
    addCategoriaProdutoService,
    removeCategoriaProdutoService
}