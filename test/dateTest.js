let data = [{
    "couponno": "1-6806961797",
    "promotionname": "【JJ】400-40元官网优惠券",
    "status": "未使用",
    "promid": "2CR11904101",
    "startdate": "06/05/2019",
    "enddate": "07/08/2019",
    "channel": "H5|PC|小程序",
    "brand": "JACK & JONES",
    "label": null
}, {
    "couponno": "1-6806839061",
    "promotionname": "【JJ】600-60元官网优惠券",
    "status": "未使用",
    "promid": "2CR11904102",
    "startdate": "06/05/2019",
    "enddate": "06/21/2019",
    "channel": "H5|PC|小程序",
    "brand": "JACK & JONES",
    "label": null
}, {
    "couponno": "1-6806981573",
    "promotionname": "【JJ】1000-120元官网优惠券",
    "status": "未使用",
    "promid": "2CR11904104",
    "startdate": "07/05/2019",
    "enddate": "07/09/2019",
    "channel": "H5|PC|小程序",
    "brand": "JACK & JONES",
    "label": null
}, {
    "couponno": "1-6806917737",
    "promotionname": "【JJ】800-80元官网优惠券",
    "status": "未使用",
    "promid": "2CR11904103",
    "startdate": "06/05/2019",
    "enddate": "06/21/2019",
    "channel": "H5|PC|小程序",
    "brand": "JACK & JONES",
    "label": null
}];

// 时间点开始时间小于当天的时间，结束时间大于当天时间的。
exports.dataScope=(data) => data.filter(item =>
    new Date(item.startdate).getTime() <= new Date().getTime() && new Date(item.enddate).getTime() >= new Date(new Date().toLocaleDateString()).getTime()
)


console.log(new Date(data[0].startdate).getTime() <= new Date().getTime())
console.log(new Date(data[0].enddate).getTime() >= new Date(new Date().toLocaleDateString()).getTime());
console.log(new Date(data[0].enddate).getTime())
console.log(new Date().toLocaleDateString())
console.log(new Date(new Date().toLocaleDateString()).getTime())

