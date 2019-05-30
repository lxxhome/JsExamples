var Promise = require("bluebird");
const fs = Promise.promisifyAll(require('fs'));

async function a() {
    let dirpath = '/opt/gfs/source/dec';


    b(dirpath)

    async function b(dirpath) {
        return new Promise(function (resolve, reject) {
            try {
                await
                fs.mkdirAsync(dirpath);
            } catch (e) {
                console.log(e);
            }
            console.log(dirpath);
        })
    }

}

a();