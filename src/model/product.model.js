const mongoose = require('mongoose');

function getDataAtualUTC3() {
    var agora = new Date();
    agora.setHours(agora.getHours() - 3);
    return agora;
}

const ProductSchema = mongoose.Schema({
    nome: {type: String, required: true, unique: true},
    precoUnitario: {type: Number, required: true},
    descricao: {type: String, required: true},
    imagem: {type: String, required: true},
    codigodebarras: {type: String, required: true, unique: true},
    // categoria: [
    //     {
    //         _id: {type: mongoose.Schema.Types.ObjectId, ref: 'Categorias', required: true, unique: true},
    //         dataCriacao: {type: Date, required: true, default: getDataAtualUTC3()}
    //     }
    // ],
    criadoEm: {type: Date, default: getDataAtualUTC3()}
});

const ProductModel = mongoose.model('Produtos', ProductSchema);

module.exports = ProductModel;