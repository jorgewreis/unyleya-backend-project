const categoriaService = require('../service/categoria.service');

function getDataAtualUTC3() {
    var agora = new Date();
    agora.setHours(agora.getHours() - 3);
    return agora;
}

const findCategoriaByIdController = async (req, res) => {
    try {
        res.status(200).send(await categoriaService.findCategoriaByIdService(req.params.id));
    } catch {
        console.log(`erro: ${error}`);
        res.status(500).send({ message: 'Erro inesperado, tente novamente!' });
    }
};

const findAllCategoriaController = async (req, res) => {
    try {
        res.status(200).send(await categoriaService.findAllCategoriaService());
    } catch {
        console.log(`erro: ${error}`);
        res.status(500).send({ message: 'Erro inesperado, tente novamente!' });
    }
};

const createCategoriaController = async (req, res) => {
    try {
        const corpo = {
            ...req.body,
            dataCriacao: getDataAtualUTC3()
        }
        res.status(201).send(await categoriaService.createCategoriaService(corpo));
    } catch {
        console.log(`erro: ${error}`);
        res.status(500).send({ message: 'Erro inesperado, tente novamente!' });
    }
};

const updateCategoriaController = async (req, res) => {
    try {
        res.status(200).send(await categoriaService.updateCategoriaService(req.params.id, req.body));
    } catch {
        console.log(`erro: ${error}`);
        res.status(500).send({ message: 'Erro inesperado, tente novamente!' });
    }
};

const deleteCategoriaController = async (req, res) => {
    try {
        res.status(200).send(await categoriaService.deleteCategoriaService(req.params.id));
    } catch {
        console.log(`erro: ${error}`);
        res.status(500).send({ message: 'Erro inesperado, tente novamente!' });
    }
};

module.exports = {
    findCategoriaByIdController,
    findAllCategoriaController,
    createCategoriaController,
    updateCategoriaController,
    deleteCategoriaController,
};