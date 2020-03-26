let uuid = require('uuid');

let { v4 } = uuid;
let uuidv4 = v4();
let newuuid = uuidv4.split('-');
console.log(uuidv4);
console.log(newuuid);
let arrstr = '';
newuuid.forEach(item => arrstr = arrstr + item);
console.log(arrstr);