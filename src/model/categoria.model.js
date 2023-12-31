const mongoose = require('mongoose');

function getDataAtualUTC3() {
    var agora = new Date();
    agora.setHours(agora.getHours() - 3);
    return agora;
}

const categoriaSchema = new mongoose.Schema({
    nome: { type: String, required: true, unique: true },
    dataCriacao: { type: Date, required: true, default: getDataAtualUTC3() },
});

const Categoria = mongoose.model('Categorias', categoriaSchema);

module.exports = Categoria;