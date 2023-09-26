const productService = require('../service/product.service');


function getDataAtualUTC3() {
    var agora = new Date();
    agora.setHours(agora.getHours() - 3);
    return agora;
}

const findProductByIdController = async (req, res) => {
    try {
        res.send(await productService.findProductByIdService(req.params.id));
    } catch {
        console.log(`error: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
}

const findAllProductController = async (req, res) => {
    try {
        res.send(await productService.findAllProductService());
    } catch {
        console.log(`error: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
}

const createProductController = async (req, res) => {
    try {
        const corpo = {
            ...req.body,
            userId: req.userId,
            dataCriacao: getDataAtualUTC3()
        }
        res.send(await productService.createProductService(corpo));
    } catch {
        console.log(`error: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
}

const updateProductController = async (req, res) => {
    try {
        res.send(await productService.updateProductService(req.params.id, req.body));
    } catch {
        console.log(`error: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }   
}

const deleteProductController = async (req, res) => {
    try {
        res.send(await productService.deleteProductService(req.params.id));
    } catch {
        console.log(`error: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
}

module.exports = {
    findProductByIdController,
    findAllProductController,
    createProductController,
    updateProductController,
    deleteProductController
}