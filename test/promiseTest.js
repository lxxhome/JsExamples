var fs = require("fs");
//此实例总结：本来Promise中的就是异步，readFile中的回调函数也是异步，异步中又套异步函数，在内部的异步函数执行后，
//程序不知道跳到哪里去了，跳不回来。异步套异步不可行。
new Promise((resolve, reject) => {
    console.log('Initial');
    resolve();
})
    .then(() => {
        //  throw new Error('Something failed!')
        return new Promise((resolve, reject) => {
            fs.readFile('./test/input.txt', function (err, data) {
                if (err) return console.error(err);
                console.log(data.toString());
            });
        })
        // console.log('Do this');
    })
    // .catch((err) => {
    //     console.log(err.message)
    // })
    .then(() => {

        return new Promise((resolve, reject) => {
            fs.readFile('./test/test.txt', function (err, data) {
                if (err) return console.error(err);
                console.log(data.toString());
            });
        })
        // console.log('Do this whatever happend before');
    })


