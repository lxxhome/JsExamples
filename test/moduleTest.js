// import {path} from 'path';

const numbers=[1,3,5,2,6];
// reduce 执行一个reducer函数，使array的成员作为单独的输出值进行运算。total为每次运算后的结果。
const sum=numbers.reduce((total,num)=>total+num);
// sum=1+3+5+2+6
console.log(sum)