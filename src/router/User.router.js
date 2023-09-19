const express = require('express');
const router = express.Router();
const userController = require('../controller/User.controller');

router.get('/findById:id', (req, res) => {
    res.send({
        message: 'Rota findById'
    });
});

router.get('/findAll', (req, res) => {
    res.send({
        message: 'Rota findAll'
    });
});


router.post('/create', (req, res) => {
    res.send({
        message: 'Rota create'
    });
});

router.post('/addAddress/:id', (req, res) => {
    res.send({
        message: 'Rota addAddress'
    });
});

router.post('/addPhone/:id', (req, res) => {
    res.send({
        message: 'Rota addPhone'
    });
});

router.post('/addFavProduct/:id', (req, res) => {
    res.send({
        message: 'Rota addFavorite'
    });
});


router.put('/update/:id', (req, res) => {
    res.send({
        message: 'Rota update'
    });
});


router.delete('/remove/:id', (req, res) => {
    res.send({
        message: 'Rota delete'
    });
});

router.delete('/removeFavorite/:id', (req, res) => {
    res.send({
        message: 'Rota removeFavorite'
    });
});

router.delete('/removeAddress/:id', (req, res) => {
    res.send({
        message: 'Rota removeAddress'
    });
});

router.delete('/removePhone/:id', (req, res) => {
    res.send({
        message: 'Rota removePhone'
    });
});

module.exports = router;