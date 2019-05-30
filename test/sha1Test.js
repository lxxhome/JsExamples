const utf8=require("utf8");
const crypto=require("crypto");

let username = "lzsztj";
let date = new Date('2018-8-20 18:38:18').toString();
let dateGmt=date.substring(0,date.indexOf('+'));
let dateUtf=utf8.encode(dateGmt);
let apiKey = utf8.encode("Best_2018");
let sign = crypto.createHmac('sha1', apiKey).update(dateUtf).digest().toString('base64');
console.log(`dateGmt:${dateGmt},dateUtf:${dateUtf},sign:${sign}`)

let authorization=utf8.encode(username+":"+sign).toString("base64");

//s/yz7QfKHSbG9YKMvTr+qVVMelM=
//JhqJN74mEAOlO/GUj0TDE7aJaXU=