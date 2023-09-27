// Definições de importação
const express = require('express');
require('dotenv').config();
const user = require('./src/router/user.router');
const auth = require('./src/router/auth.router');
const product = require('./src/router/product.router');
const categoria = require('./src/router/categoria.router');
const carrinho = require('./src/router/carrinho.router');
const pedido = require('./src/router/pedido.router');

const { connectToDatabase } = require('./src/database/database');
const Categoria = require('./src/model/categoria.model');
const app = express();

// Definições de rotas
const port = 3000;

app.use(express.json());

// Conexão com o banco de dados
connectToDatabase();

app.use('/user', user);// Rotas do usuário
app.use('/auth', auth); // Rota de autenticação
app.use('/product', product); // Rotas de produtos
app.use('/categoria', categoria); // Rotas de categorias
app.use('/carrinho', carrinho); // Rotas de carrinho
app.use('/pedido', pedido); // Rotas de pedidos

// Rota inicial
app.get('/marketplace/', (req, res) => {
    res.send({
        message: 'Bem vindo ao nosso Marketplace'
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/marketplace`);
});