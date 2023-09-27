const pedidoService = require('../service/pedido.service');

const findPedidoByIdController = async (req, res) => {
    try {
        res.status(200).send(await pedidoService.findPedidoByIdService(req.params.id));
    } catch (error) {
        res.status(500).send({ message: 'Erro inesperado, tente novamente!' });
        console.log(error);
    }
};

const findAllPedidosController = async (req, res) => {
    try {
        res.status(200).send(await pedidoService.findAllPedidoService());
    } catch (error) {
        res.status(500).send({ message: 'Erro inesperado, tente novamente!' });
        console.log(error);
    }
};

const createPedidoController = async (req, res) => {
    try {
        const corpo= {
            ...req.body,
            userId: req.userId
        };
        res.status(201).send(await pedidoService.createPedidoService(corpo));
    } catch (error) {
        res.status(500).send({ message: 'Erro inesperado, tente novamente!' });
        console.log(error);
    }
};

const deletePedidoController = async (req, res) => {
    try {
        res.status(200).send(await pedidoService.deletePedidoService(req.params.id));
    } catch (error) {
        res.status(500).send({ message: 'Erro inesperado, tente novamente!' });
        console.log(error);
    }
};

const updateStatusPedidoController = async (req, res) => {
    try {
        res.status(200).send(await pedidoService.updateStatusPedidoService(req.params.id, req.body.status));
    } catch (error) {
        res.status(500).send({ message: 'Erro inesperado, tente novamente!' });
        console.log(error);
    }
};

module.exports = {
    findPedidoByIdController,
    findAllPedidosController,
    createPedidoController,
    deletePedidoController,
    updateStatusPedidoController
};