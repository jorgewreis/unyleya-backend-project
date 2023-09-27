const { get } = require('mongoose');
const CarrinhoService = require('../service/carrinho.service');

const findCarrinhoByUserIdController = async (req, res) => {
    try {
        res.status(200).send(await CarrinhoService.findCarrinhoByUserIdService(req.params.id));
    } catch (error) {
        res.status(500).send({ message: 'Erro inesperado, tente novamente!' });
        console.log(error);
    }
};

const findAllCarrinhosController = async (req, res) => {
    try {
        res.status(200).send(await CarrinhoService.findAllCarrinhosService());
    } catch (error) {
        res.status(500).send({ message: 'Erro inesperado, tente novamente!' });
        console.log(error);
    }
};

const createCarrinhoController = async (req, res) => {
    try {
        const corpo= {
            ...req.body,
            userId: req.userId
        };
        res.status(201).send(await CarrinhoService.createCarrinhoService(corpo));
    } catch (error) {
        res.status(500).send({ message: 'Erro inesperado, tente novamente!' });
        console.log(error);
    }
};

const updateCarrinhoController = async (req, res) => {
    try {
        res.status(200).send(await CarrinhoService.updateCarrinhoService(req.params.id, req.body));
    } catch (error) {
        res.status(500).send({ message: 'Erro inesperado, tente novamente!' });
        console.log(error);
    }
};

const deleteCarrinhoController = async (req, res) => {
    try {
        res.status(200).send(await CarrinhoService.deleteCarrinhoService(req.params.id));
    } catch (error) {
        res.status(500).send({ message: 'Erro inesperado, tente novamente!' });
        console.log(error);
    }
};

module.exports = {
    findCarrinhoByUserIdController,
    findAllCarrinhosController,
    createCarrinhoController,
    updateCarrinhoController,
    deleteCarrinhoController
};