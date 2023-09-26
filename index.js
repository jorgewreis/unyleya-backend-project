// Definições de importação
const express = require('express');
require('dotenv').config();
const user = require('./src/router/User.router');
const auth = require('./src/router/Auth.router');
const product = require('./src/router/product.router');

const { connectToDatabase } = require('./src/database/database');
const app = express();

// Definições de rotas
const port = 3000;

app.use(express.json());

// Conexão com o banco de dados
connectToDatabase();

app.use('/user', user);// Rotas do usuário
app.use('/auth', auth); // Rota de autenticação
app.use('/product', product); // Rotas de produtos

// Rota inicial
app.get('/marketplace/', (req, res) => {
    res.send({
        message: 'Bem vindo ao nosso Marketplace'
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/marketplace`);
});