
const Promise = require('bluebird');
const xlsx = require('node-xlsx');
const request = require('request-promise');
const fs = require('fs');
Promise.promisifyAll(fs);

async function sendMsgBulk() {
    const sheets = xlsx.parse('E:\\middle\\gitlab\\doc\\双十一\\手机手表中奖短信正式.xlsx');
    // sheets.forEach(sheet=>{
    //获取整个sheet数据
    let {data} = sheets[0];
    // splice() 向数组中添加/删除项目，返回被删除的项目。
    // arrayObjce.spice(index,howmany,item1,......,itemX)
    // index 必须。整数，规定添加/删除项目的位置，使用负数从可数组结尾处规定位置。
    // howmany 必须。要删除的项目数量。设置为0不删除。
    // item1,...,itemX 可选。向数组添加的新项目。
    data.splice(0, 1) //删除表头行

    for (let rowId in data) {
        let row = data[rowId];
        let requestBody = {
            brand: row[0],
            pszMobis: row[1],
            pszMsg: row[2],
        };
        fs.appendFileAsync('./result.log','\r\n')
        fs.appendFileAsync('./result.log', JSON.stringify(requestBody)) //短信发送请求参数写入日志文件
        fs.appendFileAsync('./result.log','\n')
        console.log(requestBody)
        let result = await request({
            method: 'post',
            uri: 'https://db.bestseller.com.cn/api/doub11gift/sendMsg',
            body: requestBody,
            headers: {
                'User-Agent': 'Request-Promise',
                'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDUyOTM0MzYsImNoYW5uZWwiOjEsImlzcyI6Imx6c3oiLCJqdGkiOiI1NjZiMWZlYS03Y2U0LTRmYTAtOGYwOS1kYjdkODg5MDRjMzUifQ.9RJyIuzoE9SgxF96NA1JAGUSAEJcg0fBzU_83aHAo5A',
            },
            json: true,
        });
        fs.appendFileAsync('./result.log', JSON.stringify(result)); //短信发送结果写入日志文件
        console.log(result);
    }
}

sendMsgBulk();

