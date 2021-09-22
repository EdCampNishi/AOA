const express = require('express');
const userController = require('../controller/usersController');

const router = express.Router();

router.get('/users', userController.getUsers);

router.get('/user/:id', async function(req, res) {

});
router.post('/user/cadastro', async function(req, res) {

});
router.put('/user/:id', async function(req, res) {

});
router.delete('/user/:id', async function(req, res) {

});

module.exports = router;