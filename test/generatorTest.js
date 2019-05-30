var co = require('co');

co(function* () {
    //yield any Promise
    var result = yield Promise.resolve(true);
}).catch(onerror);

co(function *() {
    var a=Promise.resolve(1);
    var b=Promise.resolve(2);
    var c=Promise.resolve(3);
    var res=yield [a,b,c];
    console.log(res)
}).catch(onerror)

co(function *() {
    try{
        yield  Promise.reject(new Error('boom'))
    }catch (err) {
       console.error(err.message);
    }
}).catch(onerror())


function onerror(err) {
    // log any uncaught errors
    // co will not throw any errors you do not handle!!!
    // HANDLE ALL YOUR ERRORS!!!
    console.error(err.stack);
}



// function* generator(i) {
//     yield i;
//     yield i+10;
//     yield 0;
//     yield i+20;
// }
//
// let gen=generator(10);
//
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value)
