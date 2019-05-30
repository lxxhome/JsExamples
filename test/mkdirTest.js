const Promise=require('bluebird');
const fs=require('fs');
Promise.promisifyAll(fs);
const path = require('path');
let codeDir = 'e:/aa/aa';

exports.index = async function () {
    try {
        console.log('mkdir')
        await fs.mkdirAsync(codeDir);
    } catch (e) {
       console.log(e.message)
    }
}
