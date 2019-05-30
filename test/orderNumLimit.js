//每天第一位顾客的订单数量不能超过10，超过则提示不能再购物。
//以下为示例代码模型。

let phone=this.request.phone;
let count=await redis.get('orderCount').get(phone);
if(count<10){
    let time=new Date(new Date().setHours(24,0,0,0))-new Date();
    await redis.get('orderCount').pipeline().get(phone).hincrby(1).expire(time).exec();
}else{
    this.body={msg:"当日订单数量已达上限，请改天购物"}
}
