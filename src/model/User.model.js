const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome:       {typeof: String, required: true},
    email:      {typeof: String, required: true, unique: true},
    senha:      {typeof: String, required: true},
    imagem:     {typeof: String},
    endereco:  [
                {
                    cep:        {typeof: String, required: true},
                    rua:        {typeof: String, required: true},
                    numero:     {typeof: Number, required: true},
                    complemento:{typeof: String, required: true},
                    bairro:     {typeof: String, required: true},
                    cidade:     {typeof: String, required: true},
                    estado:     {typeof: String, required: true},
                    dataCriacao:{typeof: Date, required: true}
                }
               ],
    telefones: [
                {
                    ddd:        {typeof: Number, required: true},
                    numero:     {typeof: Number, required: true}
                }
               ],
    dataCriacao:{typeof: Date, required: true},
    produtosFavoritos: [
        {
            _id: {typeof: mongoose.Schema.Types.ObjectId, ref: 'Produtos', required: true, unique: true},
            dataCriacao: {typeof: Date, required: true}
        }
    ],
    admin: {typeof: Boolean, required: true, default: false}
});

const User = mongoose.model('User', UserSchema);

module.exports = User;