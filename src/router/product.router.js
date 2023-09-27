const router = require('express').Router();
const productController = require('../controller/product.controller');
const authMiddleware = require('../middleware/auth.middleware');
const { validaProduto, validaId } = require('../middleware/validacao.middleware');
const paginacao = require('../middleware/paginacao.middleware');

router.get('/find/:id', authMiddleware, validaId, productController.findProductByIdController);
router.get('/findAll', authMiddleware, paginacao, productController.findAllProductController);

router.post('/create', authMiddleware, validaProduto, productController.createProductController);
router.post('/addCategoriaProduto/:id', authMiddleware, validaId, productController.addCategoriaProdutoController);

router.put('/update/:id', authMiddleware, validaId, validaProduto, productController.updateProductController);

router.delete('/delete/:id', authMiddleware, validaId, productController.deleteProductController);
router.delete('/removeCategoriaProduto/:id', authMiddleware, validaId, productController.removeCategoriaProdutoController);

module.exports = router;