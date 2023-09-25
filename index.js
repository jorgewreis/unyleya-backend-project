// Definições de importação
const express = require('express');
const user = require('./src/router/User.router');
const { connectToDatabase } = require('./src/database/database');
const auth = require('./src/router/Auth.router');

const app = express();

// Definições de rotas
const port = 3000;

app.use(express.json());

// Conexão com o banco de dados
connectToDatabase();

app.use('/user', user);// Rotas do usuário
app.use('/auth', auth); // Rota de autenticação

// Rota inicial
app.get('/marketplace/', (req, res) => {
    res.send({
        message: 'Bem vindo ao nosso Marketplace'
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/marketplace`);
});