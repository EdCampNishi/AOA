const express = require('express')
const app = express();

app.use(express.json());
app.use('/', require('./route/userRoute'));
app.use((error, req, res, next) => {
    res.status = (error.status || 500);
    res.json({error: error.message});
});

app.listen(3000, () => console.log('Servidor iniciado'));