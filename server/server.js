const express = require('express')
const app = express();

app.use('/', require('./route/userRoute'));
app.listen(3000, () => console.log('Servidor iniciado'));