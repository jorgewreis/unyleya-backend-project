// Definições de importação
const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { connectToDatabase } = require('./src/database/database');

const user = require('./src/router/user.router');
const auth = require('./src/router/auth.router');
const product = require('./src/router/product.router');
const categoria = require('./src/router/categoria.router');
const carrinho = require('./src/router/carrinho.router');
const pedido = require('./src/router/pedido.router');
const docs = require('./src/router/docs.router');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:3001',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        optionsSuccessStatus: 200
    }
));

// Conexão com o banco de dados
connectToDatabase();

app.use('/user', user);// Rotas do usuário
app.use('/auth', auth); // Rota de autenticação
app.use('/product', product); // Rotas de produtos
app.use('/categoria', categoria); // Rotas de categorias
app.use('/carrinho', carrinho); // Rotas de carrinho
app.use('/pedido', pedido); // Rotas de pedidos
app.use('/docs', docs); // Rotas de documentação

// Rota inicial
app.get('/marketplace/', (req, res) => {
    res.send({
        message: 'Bem vindo ao nosso Marketplace'
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/marketplace`);
});