// Importações
const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const authMiddleware = require('../middleware/auth.middleware');


// Rotas Get
router.get('/findById/:id', authMiddleware, userController.findUserByIdController);
router.get('/findAll', authMiddleware, userController.findAllUsersController);

// Rotas Post
router.post('/create', userController.createUserController);
router.post('/addAddress/:id', authMiddleware, userController.addUserAddressController);
router.post('/addPhone/:id', authMiddleware, userController.addUserPhoneController);
router.post('/addFavProduct/:id', userController.addUserFavoriteProductController);

// Rotas Put
router.put('/update/:id', authMiddleware, userController.updateUserController);

// Rotas Delete
router.delete('/remove/:id', authMiddleware, userController.removeUserController);
router.delete('/removeFavProduct/:id', authMiddleware, userController.removeUserFavoriteProductController);
router.delete('/removeAddress/:id', authMiddleware, userController.removeUserAddressController);
router.delete('/removePhone/:id', authMiddleware, userController.removeUserPhoneController);

// Exportação
module.exports = router;