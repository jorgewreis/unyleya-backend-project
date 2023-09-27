const Pedido = require('../model/pedido.model');

const findPedidoByIdService = (id) => {
    return Pedido.findById(id);
}

const findAllPedidoService = (limit, offset) => {
    return Pedido.find().limit(limit).skip(offset);
}

const createPedidoService = (body) => {
    return Pedido.create(body);
}

const deletePedidoService = (id) => {
    return Pedido.findByIdAndRemove(id);
}

const updateStatusPedidoService = (id, status) => {
    return Pedido.findOneAndUpdate({ _id: id }, { $set: { status: "Finalizado" } });
}

module.exports = {
    findPedidoByIdService,
    findAllPedidoService,
    createPedidoService,
    deletePedidoService,
    updateStatusPedidoService
}