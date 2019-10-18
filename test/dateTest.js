let data = [
    {
        "couponno": "3-691749923",
        "promotionname": "20190905测试期间券（领券时间在促销开始时间之后）",
        "status": "未使用",
        "promid": "1CR11901067",
        "startdate": "10/17/2019 18:21:59",
        "enddate": "11/18/2019 16:21:59",
        "channel": "通用",
        "brand": "ONLY",
        "label": null
    },
    {
        "couponno": "3-691749933",
        "promotionname": "7元测试券",
        "status": "未使用",
        "promid": "1CR11901083",
        "startdate": "10/17/2019 18:26:02",
        "enddate": "10/20/2019 23:59:59",
        "channel": "H5|门店|通用",
        "brand": "ONLY",
        "label": null
    },
    {
        "couponno": "3-691770019",
        "promotionname": "7元测试券",
        "status": "未使用",
        "promid": "1CR11901083",
        "startdate": "10/17/2019 18:27:46",
        "enddate": "10/20/2019 23:59:59",
        "channel": "H5|门店|通用",
        "brand": "ONLY",
        "label": null
    },
    {
        "couponno": "3-691770001",
        "promotionname": "1.5元1016测试券",
        "status": "未使用",
        "promid": "1CR11901084",
        "startdate": "10/17/2019 14:26:21",
        "enddate": "10/20/2019 23:59:59",
        "channel": "H5|门店|通用",
        "brand": "ONLY",
        "label": null
    },
    {
        "couponno": "3-691770004",
        "promotionname": "2元1017测试券",
        "status": "未使用",
        "promid": "1CR11901085",
        "startdate": "10/17/2019 14:26:29",
        "enddate": "10/20/2019 23:59:59",
        "channel": "H5|通用|门店",
        "brand": "ONLY",
        "label": null
    }
];

// 时间点开始时间小于当天的时间，结束时间大于当天时间的。
let b=data.filter(item =>
    new Date(item.startdate).getTime() <= new Date().getTime() && new Date(item.enddate).getTime() >= new Date().getTime()
)

console.log(b);


// console.log(new Date(data[0].startdate).getTime() <= new Date().getTime())
// console.log(new Date(data[0].enddate).getTime() >= new Date().getTime());
// console.log(new Date(data[0].enddate).getTime())
// console.log(new Date().toLocaleDateString())
// console.log(new Date(new Date().toLocaleDateString()).getTime())

// let endDate=new Date(new Date().toLocaleDateString()).getTime()
// let time=new Date().getTime()
// console.log(time);
// console.log(endDate);





