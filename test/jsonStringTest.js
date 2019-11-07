

let test={"code":0,"msg":"活动劵详细信息查询成功!","data":{"Channel":"H5|PC|小程序","Message":"活动劵详细信息查询成功!","Result":"S","couponno":"1-7721401792","endDate":"11/04/2019 00:00:00","parameter1":null,"promotionId":"1CR11904981","promotionName":"【ONLY】生命周期流失期线上1018","startDate":"10/16/2019 00:00:00","status":"未使用"}};
let jsonTest=JSON.stringify(test);
let a=new Date(test.data.startDate).getTime();
console.log(jsonTest);
console.log(a);
console.log(test.data.startDate);

