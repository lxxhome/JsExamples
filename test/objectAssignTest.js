let returnData = {};
let successNum = 0;
let a1 = {
    brand: "ONLY",
    pszMobis: 15034323333,
    pszMsg:"这是一条测试短信",
}
let b =[];
b.push(a1);
 successNum=1;
Object.assign(returnData, { successNum }, {b},{successNum});
console.log(returnData);
