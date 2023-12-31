const router = require('express').Router();
const pedidoController = require('../controller/pedido.controller');
const authMiddleware = require('../middleware/auth.middleware');
const { validaPedido, validaId } = require('../middleware/validacao.middleware');
const paginacao = require('../middleware/paginacao.middleware');

router.get('/findAll', authMiddleware, paginacao, pedidoController.findAllPedidosController);
router.get('/findById/:id', authMiddleware, validaId, pedidoController.findPedidoByIdController);

router.post('/create', authMiddleware, validaPedido, pedidoController.createPedidoController);

router.delete('/delete/:id', authMiddleware, validaId, pedidoController.deletePedidoController);

router.patch('/updateStatus/:id', authMiddleware, validaId, pedidoController.updateStatusPedidoController);

module.exports = router;