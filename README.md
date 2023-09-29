# unyleya-backend-project
Projeto final da disciplina **Back-End Development** do curso de 
▶️ MBA EM DESENVOLVIMENTO FULL STACK ◀️ da Faculdade Unyleya

---

## Como foi feito o código: ✏️
- Foram utilizadas as dependências do NodeJs: Express, Mongoose, Nodemon, Cors, Dotenv, Bcryptjs, Jsonwebtoken, Crypto e Swagger.
- O banco de dados utilizado foi o MongoDB.
- O código foi feito em JavaScript através do Visual Studio Code.

## Como executar o código: 💻
- Para executar o código, é necessário ter o NodeJs instalado na máquina.
- Após clonar o repositório, é necessário executar o comando `npm install` para instalar as dependências.
- Para executar o código, é necessário executar o comando `npm start` ou `npm run dev` para executar o código em modo de desenvolvimento.
- Para acessar a documentação do Swagger, é necessário acessar o endereço `http://localhost:3000/docs/api-docs/` no navegador.

## Endpoints: 
- O endpoint de autenticação é o `/auth`.
- O endpoint de usuários é o `/user`.
- O endpoint de produtos é o `/product`.
- O endpoint de pedidos é o `/pedido`.
- O endpoint de categorias é o `/categoria`.
- O endpoint de carrinho é o `/carrinho`.

### Responses:
- As respostas são retornadas em JSON conforme tabela abaixo:

| Código | Descrição |
| :--- | :--- |
| 200 | Requisição executada com sucesso |
| 201 | Requisição executada com sucesso e um novo recurso foi criado como resultado |
| 400 | Erro de validação ou os dados enviados não existem |
| 401 | Erro de autenticação |
| 404 | Recurso não encontrado |
| 500 | Erro interno do servidor |


## Como foi feita a documentação: 📝
- A documentação foi feita utilizando o Swagger.
- Para acessar a documentação, é necessário acessar o endereço `http://localhost:3000/docs/api-docs/` no navegador.
- A documentação possui os endpoints de autenticação, usuários, produtos, pedidos, categorias e carrinho.
