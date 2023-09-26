const router = require('express').Router();
const productController = require('../controller/product.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/find/:id', authMiddleware, productController.findProductByIdController);
router.get('/findAll', authMiddleware, productController.findAllProductController);

router.post('/create', authMiddleware, productController.createProductController);

router.put('/update/:id', authMiddleware, productController.updateProductController);

router.delete('/delete/:id', authMiddleware, productController.deleteProductController);

module.exports = router;