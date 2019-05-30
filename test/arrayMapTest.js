let arrNum = [{ 'num1': 1, 'num2': 2, 'num3': 3 }];
let mapResult = arrNum.map((num, index) => num[index])
// console.log(mapResult)

// 
console.log([1, 2, 1].map(parseInt));
console.log(['1', '2', '3'].map(str => parseInt(str)));