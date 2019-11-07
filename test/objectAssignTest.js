let returnData = {};
let b=returnData;
let successNum = 0;
let a1 = {
    brand: "ONLY",
    pszMobis: 15034323333,
    pszMsg:"这是一条测试短信",
}


Object.assign(b, a1);
console.log(returnData);
console.log('===========')
console.log(b);
