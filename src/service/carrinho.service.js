const Carrinho = require('../model/carrinho.model');

const findCarrinhoByUserIdService = (id) => {
    return Carrinho.findById(id);
};

const findAllCarrinhosService = (limit, offset) => {
    return Carrinho.find().limit(limit).skip(offset);
};

const createCarrinhoService = (body) => {
    return Carrinho.create(body);
};

const updateCarrinhoService = (id, body) => {
    return Carrinho.findByIdAndUpdate(id, body, { returnDocument: true });
};

const deleteCarrinhoService = (id) => {
    return Carrinho.findByIdAndRemove(id);
}

module.exports = {
    findCarrinhoByUserIdService,
    findAllCarrinhosService,
    createCarrinhoService,
    updateCarrinhoService,
    deleteCarrinhoService
};