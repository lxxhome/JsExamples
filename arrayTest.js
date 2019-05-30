let data = [{ curdate: '113', name: '退单状态推送', total_num: 442 },
{ curdate: '114', name: '退单状态推送', total_num: 477 },
{ curdate: '115', name: '退单状态推送', total_num: 1087 },
{ curdate: '116', name: '退单状态推送', total_num: 505 },
{ curdate: '117', name: '退单状态推送', total_num: 279 }]

data.push({ 'curdate': '111', 'name': '退单状态推送', 'total_num': 0 })
console.log(data);
console.log('===============')
data.sort((item1, item2) => { if (item1.curdate < item2.curdate) { return -1 } else if (item1.curdate > item2.curdate) { return 1 } else { return 0 }});
console.log(data);

