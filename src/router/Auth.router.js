const router = require('express').Router();
const authController = require('../controller/Auth.controller');

router.post('/login', authController.loginController);

module.exports = router;