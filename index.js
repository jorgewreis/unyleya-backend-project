// Definições de importação
const express = require('express');
const user = require('./src/router/User.router');
const { connectToDatabase } = require('./src/database/database');

const app = express();

// Definições de rotas
const port = 3000;

app.use(express.json());

// Conexão com o banco de dados
connectToDatabase();

// Rotas do usuário
app.use('/user', user);

// Rota inicial
app.get('/marketplace/', (req, res) => {
    res.send({
        message: 'Bem vindo ao nosso Marketplace'
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/marketplace`);
});