// 伪随机数算法（线性同余法）

function rnd(seed) {
    seed = (seed * 9301 + 49297) % 233280; //为何使用这三个数?
    return seed / (233280.0);
};

function rand(number) {
    today = new Date();
    seed = today.getTime();
    return Math.ceil(rnd(seed) * number);
};

let num = 0; //用来累加出现三个随机数相等的次数
let myNum1, myNum2, myNum3;

// 老虎机同时出三个数，数相同则有奖品。
// 例如同时出三个1，则获取100金币，同时出三个3，则获取200金币。
for (let i = 0; i < 10000; i++) {
    myNum1 = rand(9);
    myNum2 = rand(9);
    myNum3 = rand(9);
    if (myNum1 == myNum2 == myNum3) {
        num += 1;
    } else {
        console.log(myNum1, myNum2, myNum3);
    }
}
console.log(`循环十万次，出现三个数相等的次数为：${num}`);