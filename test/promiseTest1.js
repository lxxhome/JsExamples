function test(resolve, reject) {
    var timeOut = Math.random() * 2;
    console.log('set timeout to:' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            console.log('call resolve()...');
            resolve('200 OK');
        } else {
            console.log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds');
        }
    }, timeOut * 1000);
}

new Promise(test).then(result => {
    console.log('成功：' + result);
}).catch(reason => {
    console.log('失败：' + reason);
})

