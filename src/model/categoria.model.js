const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    nome: { type: String, required: true, unique: true }
});

const Categoria = mongoose.model('Categorias', categoriaSchema);

module.exports = Categoria;