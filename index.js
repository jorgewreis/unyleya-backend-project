// Definições de importação
const express = require('express');
const { connectToDatabase } = require('./src/database/database');
const app = express();

// Definições de rotas
const port = 3000;

app.use(express.json());

connectToDatabase();

app.get('/marketplace/', (req, res) => {
    res.send({
        message: 'Bem vindo ao nosso Marketplace'
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/marketplace`);
});