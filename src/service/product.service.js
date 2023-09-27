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

const addCategoriaProdutoService = (id, categoria) => {
    return ProductModel.findByIdAndUpdate(
        { 
            _id: id 
        }, 
        { 
            $push: 
            { 
                categoria: {
                    _id: categoria._id,
                    dataCriacao: categoria.dataCriacao
                },
            },
        },
        {
            rawResult: true,
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
                categoria: {
                    _id: categoria._id,
                },
            },
        },
        {
            rawResult: true,
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