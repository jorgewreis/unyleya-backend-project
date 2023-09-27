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

}

module.exports = {
    findPedidoByIdService,
    findAllPedidoService,
    createPedidoService,
    deletePedidoService,
    updateStatusPedidoService
}