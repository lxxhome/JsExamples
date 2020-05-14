let arr = ["24", "1"]
let findIndex = arr.findIndex(value => value < 1);
console.log(findIndex);  // -1


let arr1 = [null];
let findIndex1 = arr1.findIndex(value => value < 1);
console.log(findIndex1);// 0


let arr2 = ["0"];
let findIndex2 = arr2.findIndex(value => value < 1);
console.log(findIndex2);// 0


let arr3 = ["-1"];
let findIndex3 = arr3.findIndex(value => value < 1);
console.log(findIndex3);// 0

let arr4 = [""];
let findIndex4 = arr4.findIndex(value => value < 1);
console.log(findIndex4); // 0


let arr5 = [undefined];
console.log(JSON.stringify(arr5));
let findIndex5 = arr5.findIndex(value => value < 1);
console.log(findIndex5);  //-1

if (arr5[0] > 1) {
    console.log('undefined 大于1');
}

if (arr5[0] < 1) {
    console.log('undefined 小于1');
}