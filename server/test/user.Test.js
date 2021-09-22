const axios = require('axios');

test('Shoud get all users', async function() {
    const response = await axios({
        url:'http://localhost/3000',
        method: 'get'
    })
});