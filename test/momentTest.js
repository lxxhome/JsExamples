const moment = require('moment');

let time = moment(new Date().setHours(24,0,0,0)).format('YYYY-MM-DD HH:mm:SS');
console.log(time);