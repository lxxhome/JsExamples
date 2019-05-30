let colors=["red","green","blue"];

let [,,thirdColor]=colors;

console.log(thirdColor);

let a=1,b=2;
[a,b]=[b,b]; //交换两个变量的值
console.log(a);
console.log(b);

let  [firstColor,...restColors]=colors;
console.log(firstColor);
console.log(restColors.length);
console.log(restColors[0],restColors[1]);