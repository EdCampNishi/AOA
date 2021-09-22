const knex = require('../infra/database');

exports.getUsers = () => 
    knex('users').then((results) => {
        return results;
    }).catch((error) => {
        console.log('Erro: ' + error);
    });
