

console.log('555'.padStart(10, 'DA0000000'))

//判断是否为空对象
let data={};
let b=JSON.stringify(data)=="{}";
console.log(b);
let arr=Object.getOwnPropertyNames(data);
console.log(arr.length==0)

let arrs=Object.keys(data).length==0;
console.log(arrs)