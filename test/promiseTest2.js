function test() {
    return new Promise(function (resolve, reject) {
        let x = 3;
        let y = 4;
        console.log(x)
        if (x + y > 3) {
            console.log(y)
            resolve(x + y);
        } else {
            console.log(2 * x)
            reject(2 * x + 2 * y)
        }
    })
}
console.log(test());
//
// function test1() {
//     let x = 3;
//     let y = 4;
//     let z = test(x, y);
//     console.log(z)
// }
function test1(resolve, reject) {
    let x = 1;
    let y = 1;
    console.log(x)
    if (x + y > 3) {
        console.log(y)
        resolve(x + y);
    } else {
        console.log(2 * x)
        reject(2 * x + 2 * y)
    }
}


new Promise(test).then(result => {
    console.log(result);
}).catch(reason => {
    console.log(reason)
})