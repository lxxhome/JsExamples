const axios = require('axios');

axios.get('https://www.jackjones.com.cn/api/test/version', {
    params: {
        id: 13
    }
})
    .then(response => {
        console.log(JSON.stringify(response.data));
    })
    .catch(error => {
        console.log(error)
    })