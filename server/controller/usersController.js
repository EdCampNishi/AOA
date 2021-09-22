const { createPoolCluster } = require('mysql');
const knexData = require('../data/usersData');

module.exports = {
    async getUsers(req, res) {
        const users = await knexData.getUsers();

        return res.json(users);
    },

    async createUser(req, res, next) {
        try{
            const userCreated = await knexData.createUser(req.body);

            return res.status(201).send();
        }catch(error){
            next(error);
        }

    }
}