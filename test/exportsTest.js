exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/vo'
};


// 时间点开始时间小于当天的时间，结束时间大于当天时间的。
exports.dataScope=(data) => data.filter(item =>
    new Date(item.startdate).getTime() <= new Date().getTime() && new Date(item.enddate).getTime() >= new Date(new Date().toLocaleDateString()).getTime()
);