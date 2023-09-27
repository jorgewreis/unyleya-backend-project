// Importações
const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const authMiddleware = require('../middleware/auth.middleware');
const { validaUser, validaEndereco, validaId } = require('../middleware/validacao.middleware');
const paginacao = require('../middleware/paginacao.middleware');


// Rotas Get
router.get('/findById/:id', authMiddleware, validaId, userController.findUserByIdController);
router.get('/findAll', authMiddleware, paginacao, userController.findAllUsersController);

// Rotas Post
router.post('/create', validaUser, userController.createUserController);
router.post('/addAddress/:id', authMiddleware, validaId, validaEndereco, userController.addUserAddressController);
router.post('/addPhone/:id', authMiddleware, validaId, userController.addUserPhoneController);
router.post('/addFavProduct/:id', authMiddleware, validaId, userController.addUserFavoriteProductController);

// Rotas Put
router.put('/update/:id', authMiddleware, validaId, validaUser, userController.updateUserController);

// Rotas Delete
router.delete('/remove/:id', authMiddleware, validaId, userController.removeUserController);
router.delete('/removeFavProduct/:id', authMiddleware, validaId, userController.removeUserFavoriteProductController);
router.delete('/removeAddress/:id', authMiddleware, validaId, userController.removeUserAddressController);
router.delete('/removePhone/:id', authMiddleware, validaId, userController.removeUserPhoneController);

// Exportação
module.exports = router;