const mongoose = require('mongoose');

function getDataAtualUTC3() {
    var agora = new Date();
    agora.setHours(agora.getHours() - 3);
    return agora;
}

const PedidoSchema = new mongoose.Schema({
    produtos: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Produtos', required: true },
            quantidade: { type: Number, required: true }
        },
    ],
    dataCriacao: { type: Date, required: true, default: getDataAtualUTC3() },
    precoTotal: { type: Number, required: true },
    frete: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
    status: { type: String, required: true, default: 'Em processamento' },
});

const Pedido = mongoose.model('Pedidos', PedidoSchema);

module.exports = Pedido;