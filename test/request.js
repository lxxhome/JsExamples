const request = require('request-promise');

async function test(){
   let result=await request.get("http://interface.only.cn/test/version",{a:1})
    console.log(result)
    return result;
}
console.log(test())
//
// let a=await test()
// console.log(a)
// //

