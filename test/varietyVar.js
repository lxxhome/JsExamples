const ioredis = require('ioredis');

let student = new ioredis({
    host: '127.0.0.1',
    port: 6379,
    db: 1
})

async function test() {
    let school = 'TingHua University';
    let i = 0;
    let arrayar = [];
    let NOChoose = [];
    for (i; i < 8; i++) {
        NOChoose[i] = `${school} -class - NO${i} `;
        console.log(NOChoose[i]);
        try {
            arrayar[i] = await student.get(NOChoose[i]) || 0;
            console.log(arrayar[i]);
        } catch (err) {
            console.log(err);
        }
    }
    i = 0;
    for (i; i < 8; i++) {
        console.log(arrayar[i]);
    }
}

test();