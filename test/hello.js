'use strict';

let mistypeVariable = 17;
// mistypeVa
function fun() {
    // this.name = 'test';
    return this;
};
console.assert(fun() === undefined);
console.assert(fun.call(2) === 2);
console.assert(fun.apply(null) === null);
console.assert(fun.call(undefined) === undefined);
console.assert(fun.bind(true)() === true);