const productService = require('../service/product.service');

const findProductByIdController = async (req, res) => {
    try {
        res.send(await productService.findProductByIdService(req.params.id));
    } catch(err) {
        console.log(`error: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
}

const findAllProductController = async (req, res) => {
    try {
        res.send(await productService.findAllProductService());
    } catch(err) {
        console.log(`error: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
}

const createProductController = async (req, res) => {
    try {
        const corpo = {
            ...req.body,
            userId: req.userId
        }
        res.send(await productService.createProductService(corpo));
    } catch(err) {
        console.log(`error: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
}

const updateProductController = async (req, res) => {
    try {
        res.send(await productService.updateProductService(req.params.id, req.body));
    } catch(err) {
        console.log(`error: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }   
}

const deleteProductController = async (req, res) => {
    try {
        res.send(await productService.deleteProductService(req.params.id));
    } catch(err) {
        console.log(`error: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
}

const addCategoriaProdutoController = async (req, res) => {
    try {
        const categoria = await productService.addCategoriaProdutoService(req.params.id, req.body); 
        res.status(200).send(categoria);
    } catch(err) {
        console.log(`error: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
}

const removeCategoriaProdutoController = async (req, res) => {
    try {
        const categoria = await productService.removeCategoriaProdutoService(req.body); 
        res.status(200).send(categoria);
    } catch(err) {
        console.log(`error: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
}

module.exports = {
    findProductByIdController,
    findAllProductController,
    createProductController,
    updateProductController,
    deleteProductController,
    addCategoriaProdutoController,
    removeCategoriaProdutoController
}