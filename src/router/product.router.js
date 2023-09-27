const router = require('express').Router();
const productController = require('../controller/product.controller');
const authMiddleware = require('../middleware/auth.middleware');
const { validaProduto } = require('../middleware/validacao.middleware');

router.get('/find/:id', authMiddleware, productController.findProductByIdController);
router.get('/findAll', authMiddleware, productController.findAllProductController);

router.post('/create', authMiddleware, validaProduto, productController.createProductController);
router.post('/addCategoriaProduto/:id', authMiddleware, productController.addCategoriaProdutoController);

router.put('/update/:id', authMiddleware, validaProduto, productController.updateProductController);

router.delete('/delete/:id', authMiddleware, productController.deleteProductController);
router.delete('/removeCategoriaProduto/:id', authMiddleware, productController.removeCategoriaProdutoController);

module.exports = router;