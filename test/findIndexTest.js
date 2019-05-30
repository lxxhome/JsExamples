// let array1=[1,3,6,12,15];

// function isLargeNumber(element){
//     return element>15
// }

// console.log(array1.findIndex(isLargeNumber));

let goodsCodeList = [[], ['117308507S01340', '117308507S01360', '117308507S01380']];
let stockList = [{ '117308507S01340': '25', '117308507S01360': '49', '117308507S01380': '64' },{ '117308507S01340': '25', '117308507S01360': '49', '117308507S01380': '64' }];
console.log('======')
console.log(stockList[0][goodsCodeList[1][0]]);
//商品数量列表 [ '25', '31' ]
let stockValue=stockList.map((skuInfo)=>console.log(skuInfo['117308507S01340']));

// let stockValue = stockList.map((skuInfo, index) => skuInfo[1][goodsCodeList[1][index]]);
console.log(stockValue);
//商品数量列表存在0或负时（findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。）
// let findIndex = stockValue.findIndex((value, index) => value < 1);
// console.log(findIndex);