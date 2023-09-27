const Pedido = require('../model/pedido.model');

const findPedidoByIdService = (id) => {
    return Pedido.findById(id);
}

const findAllPedidoService = () => {
    return Pedido.find();
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