const express = require('express');
const router = express.Router();
const userController = require('../controller/User.controller');

router.get('/findById:id', userController.findUserByIdController);
router.get('/findAll', userController.findAllUsersController);

router.post('/create', userController.createUserController);
router.post('/addAddress/:id', userController.addUserAddressController);
router.post('/addPhone/:id', userController.addUserPhoneController);
router.post('/addFavProduct/:id', userController.addUserFavoriteProductController);

router.put('/update/:id', userController.updateUserController);

router.delete('/remove/:id', userController.removeUserController);
router.delete('/removeFavProduct/:id', userController.removeUserFavoriteProductController);
router.delete('/removeAddress/:id', userController.removeUserAddressController);
router.delete('/removePhone/:id', userController.removeUserPhoneController);

module.exports = router;