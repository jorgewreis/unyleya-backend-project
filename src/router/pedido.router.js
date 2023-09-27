const router = require('express').Router();
const pedidoController = require('../controller/pedido.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/findAll', authMiddleware, pedidoController.findAllPedidosController);
router.get('/findById/:id', authMiddleware, pedidoController.findPedidoByIdController);

router.post('/create', authMiddleware, pedidoController.createPedidoController);

router.delete('/delete/:id', authMiddleware, pedidoController.deletePedidoController);

router.put('/updateStatus/:id', authMiddleware, pedidoController.updateStatusPedidoController);

module.exports = router;