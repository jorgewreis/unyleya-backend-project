// Importação de módulos
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

function getDataAtualUTC3() {
    var agora = new Date();
    agora.setHours(agora.getHours() - 3);
    return agora;
}

// Definição do Schema
const UserSchema = new mongoose.Schema({
    nome:       {type: String, required: true},
    email:      {type: String, required: true, unique: true},
    senha:      {type: String, required: true},
    imagem:     {type: String},
    enderecos:  [
                {
                    cep:        {type: String, required: true},
                    rua:        {type: String, required: true},
                    numero:     {type: Number, required: true},
                    complemento:{type: String, required: false},
                    bairro:     {type: String, required: true},
                    cidade:     {type: String, required: true},
                    estado:     {type: String, required: true},
                    dataCriacao:{type: Date, required: true, default: getDataAtualUTC3()}
                }
               ],
    telefones: [
                {
                    ddd:        {type: Number, required: true},
                    numero:     {type: String, required: true},
                    dataCriacao:{type: Date, required: true, default: getDataAtualUTC3()}
                }
               ],
    produtosFavoritos: [
        {
            _id: {type: mongoose.Schema.Types.ObjectId, ref: 'Produtos', unique: true},
            dataCriacao: {type: Date, default: getDataAtualUTC3()}
        }
    ],
    dataCriacao:{type: Date, required: true, default: getDataAtualUTC3()},
    admin: {type: Boolean, required: true, default: false}
});

UserSchema.pre('save', async function(next) {
    if(this.senha){
        const hash = await bcrypt.hash(this.senha, 10);
        this.senha = hash;
        next();
    }    
});

UserSchema.pre('findOneAndUpdate', async function(next) {
    if(this._update.senha){
        const hash = await bcrypt.hash(this._update.senha, 10);
        this._update.senha = hash;
        next();
    }
});

// Definição do Model
const User = mongoose.model('User', UserSchema);

// Exportação
module.exports = User;