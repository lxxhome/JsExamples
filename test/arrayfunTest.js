// // good
// function concatenateAll(...args) {
//   return args.join('');
// }

// let result = concatenateAll([1, 3, 5, 7, 0])
// console.log(result);


// let opts;
// function handleThings(opts) {
//   // ...
//   console.log(opts);
// }
// handleThings(opts);

// const x = [1, 3, 5, 7, 9];
// console.log(...x)

// // good
// let datenow = new Date(...[2016, 8, 5]);
// let a = [2016, 8, 5];
// console.log(a);
// console.log(typeof (Object));
// console.log(datenow)

// good
function bsds() {
  [1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
  });
}
console.log(bsds())