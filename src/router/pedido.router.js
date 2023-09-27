const router = require('express').Router();
const pedidoController = require('../controller/pedido.controller');
const authMiddleware = require('../middleware/auth.middleware');
const { validaProduto } = require('../middleware/validacao.middleware');

router.get('/findAll', authMiddleware, pedidoController.findAllPedidosController);
router.get('/findById/:id', authMiddleware, pedidoController.findPedidoByIdController);

router.post('/create', authMiddleware, validaProduto, pedidoController.createPedidoController);

router.delete('/delete/:id', authMiddleware, pedidoController.deletePedidoController);

router.patch('/updateStatus/:id', authMiddleware, pedidoController.updateStatusPedidoController);

module.exports = router;