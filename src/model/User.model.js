// Importação de módulos
const mongoose = require('mongoose');

// Definição do Schema
const UserSchema = new mongoose.Schema({
    nome:       {type: String, required: true},
    email:      {type: String, required: true, unique: true},
    senha:      {type: String, required: true},
    imagem:     {type: String},
    endereco:  [
                {
                    cep:        {type: String, required: true},
                    rua:        {type: String, required: true},
                    numero:     {type: Number, required: true},
                    complemento:{type: String, required: true},
                    bairro:     {type: String, required: true},
                    cidade:     {type: String, required: true},
                    estado:     {type: String, required: true},
                    dataCriacao:{type: Date, required: true}
                }
               ],
    telefones: [
                {
                    ddd:        {type: Number, required: true},
                    numero:     {type: Number, required: true}
                }
               ],
    dataCriacao:{type: Date, required: true},
    produtosFavoritos: [
        {
            _id: {type: mongoose.Schema.Types.ObjectId, ref: 'Produtos', required: true, unique: true},
            dataCriacao: {type: Date, required: true}
        }
    ],
    admin: {type: Boolean, required: true, default: false}
});

// Definição do Model
const User = mongoose.model('User', UserSchema);

// Exportação
module.exports = User;