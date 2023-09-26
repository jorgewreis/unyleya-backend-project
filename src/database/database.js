// Importação do Mongoose
const mongoose = require('mongoose');

// Conexão com o MongoDB
function connectToDatabase(){
    mongoose.connect(process.env.URLDATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Conexão com o MongoDB realizada com sucesso!');
    }).catch((error) => {
        console.log(`Erro ao conectar com o MongoDB: ${error}`);
    });
};

// Exportação do Mongoose
module.exports = {
    connectToDatabase
};
