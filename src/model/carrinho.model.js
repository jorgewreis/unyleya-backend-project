const mongoose = require('mongoose');

function getDataAtualUTC3() {
    var agora = new Date();
    agora.setHours(agora.getHours() - 3);
    return agora;
}

const CarrinhoSchema = new mongoose.Schema({
    produtos: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Produtos' },
            quantidade: { type: Number, required: true }
        },
    ],
    dataCriacao: { type: Date, required: true, default: getDataAtualUTC3() },
    precoTotal: { type: Number, required: true },
    frete: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' }
});

const Carrinho = mongoose.model('Carrinhos', CarrinhoSchema);

module.exports = Carrinho;