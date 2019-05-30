const CryptoJS = require('crypto-js');
const utf8 = require("utf8");


let username = "lzsztj";
let date = new Date('2018-8-20 18:38:18').toString();
let dateGmt = date.substring(0, date.indexOf('+'));
let dateUtf = utf8.encode(dateGmt);
let apiKey = utf8.encode("Best_2018");
console.log(dateGmt,dateUtf);
var sign = CryptoJS.HmacSHA1(dateUtf,apiKey).toString(CryptoJS.enc.Base64);
console.log(sign)
