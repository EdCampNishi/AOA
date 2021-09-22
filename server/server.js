const express = require('express')
const app = express();

app.use('/', require('./route/clienteRoute'));
app.listen(3000, function(){
    console.log('Iniciando o servidor');
});