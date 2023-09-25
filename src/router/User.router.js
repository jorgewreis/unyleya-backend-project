// Importações
const express = require('express');
const router = express.Router();
const userController = require('../controller/User.controller');

// Rotas Get
router.get('/findById/:id', userController.findUserByIdController);
router.get('/findAll', userController.findAllUsersController);

// Rotas Post
router.post('/create', userController.createUserController);
router.post('/addAddress/:id', userController.addUserAddressController);
router.post('/addPhone/:id', userController.addUserPhoneController);
//router.post('/addFavProduct/:id', userController.addUserFavoriteProductController);

// Rotas Put
router.put('/update/:id', userController.updateUserController);

// Rotas Delete
router.delete('/remove/:id', userController.removeUserController);
//router.delete('/removeFavProduct/', userController.removeUserFavoriteProductController);
router.delete('/removeAddress/', userController.removeUserAddressController);
router.delete('/removePhone/', userController.removeUserPhoneController);

// Exportação
module.exports = router;