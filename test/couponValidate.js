    
    //此处可利用redis进行活动券有效性判断
    //基本流程如下：
	// let valideCoupon=await redis.get('validateCoupon').hgetall(couponNo);
	// if(CouponNo in valideCoupon){
	// 	this.body={};
	// 	return;
	// }else{
    //     await redis.set('validateCoupon',couponNo).expire(100000) //此处可设置活动券保存时间，到一定时间后自动删除，建议一个小时以上
	// }
	
	