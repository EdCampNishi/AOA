const knexData = require('../data/usersData');

module.exports = {
    async getUsers(req, res) {
        const data = await knexData.getUsers();

        return res.json(data);
    }
}