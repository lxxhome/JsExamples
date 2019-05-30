
let alipayNotifys={}
res.alipayNotifys.setHeader(302, {
    'Location': JSON.parse(body.data).returnHtml
});

var reg = new RegExp( '\\"' , 'g' )
let body=`{"status":"200","msg":"操作成功","data":"{\\"returnHtml\\":\\"https://m.jlindeberg.com.cn/order/orderComplete/?bigorderCode=11520180827101652059&totalNumber=1&totalMoney=0.01&bigOrderId=1483197\\"}"}`
body=body.replace(reg,'"')

console.log(body)
console.log(JSON.parse(body));
console.log(JSON.parse(JSON.parse(body).data).returnHtml);