let ioredis = require('ioredis');
let numIncrease = new ioredis({
    host: '127.0.0.1',
    port: 6379,
    db: 1
});

// numIncrease.get('add1', (err, value)=> {
//     console.log(value);
// });
// numIncrease.set('add1', 1);

async function test(){
let num=await numIncrease.get('add1');
numIncrease.incr('add1');
console.log(Date.now());
console.log(Date.now()+num); //时间戳+数字递增方式生成唯一流水批次号 
}

test();