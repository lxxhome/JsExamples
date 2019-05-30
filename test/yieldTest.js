// function* generator(i) {
//     yield i;
//     yield i + 10;
// }
//
// let gen = generator(10);
// console.log(gen.next().value);
// console.log(gen.next().value)

function* numbers() {
    console.log('function start')

    let v1 = yield 0;
    console.log(`v1=${v1}`)

    let v2 = yield 1;
    console.log(`v2=${v2}`)

    return 5
}

let nums = numbers()
console.log(nums.next(2));
console.log(nums.next(3));
console.log(nums.next(4));