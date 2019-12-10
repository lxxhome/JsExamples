let res = {
    "statusCode": 000,
    "body": {
        "status": "000",
        "msg": "成功",
        "data": "{\"Html\":\"https://www.baidu.com\"}"
    }
};

let data=res.body.data;
console.log(data);
console.log(JSON.parse(data).returnHtml);