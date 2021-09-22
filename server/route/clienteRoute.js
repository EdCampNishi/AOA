const express = require('express');
const router = express.Router();

router.get('/cliente/cadastro', async function(req, res) {
    res.end('Olá');
});
router.get('/cliente/:id', async function(req, res) {

});
router.post('/cliente/cadastro', async function(req, res) {

});
router.put('/cliente/:id', async function(req, res) {

});
router.delete('/cliente/:id', async function(req, res) {

});

module.exports = router;