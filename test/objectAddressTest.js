let a = {n:1};
let b = a;
a={n:2};
a.x=10;
b.x=20;

console.log(a); //第二三行说明a、b存在一个地址中
console.log(b);
// a.x=a;
// console.log(a);//说明
// console.log(a.x);

// a.x = a = {n:2};
// console.log(a);
// console.log(b)
// console.log(a.x);
