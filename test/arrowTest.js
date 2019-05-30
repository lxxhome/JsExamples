let array1 = [1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
});
console.log(array1)

let array2 = [1, 2, 3].map(number => `A string contains the ${number}`)
console.log(array2)

let array3 = [1, 2, 3].map((number, index) => ({ [index]: number }));
console.log(array3);

//const hasPhone = channel => channel === 3 || channel === 5;
// 上述语句含义如下列函数：
function hasPhone(channel){
    return channel===3||channel===5;
}

console.log(hasPhone);
let a=7;
if (hasPhone(a)) {
    console.log(a);
} else {
    console.log('no this channel');
}
// foo(() => { foo = true });

// ['get','post','put'].map(httpMethod=>(
//     Object.prototype.hasOwnProperty.call(
//         httpMagicObjectWithAVeryLongName,
//         httpMethod,
//     )
// ));
[1, 2, 3].map(x => x ^ 2);



