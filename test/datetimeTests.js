// let date=new Date('2018-8-22 13:22:21');
let  date4=new Date(Date.now()-300000);
let date9=new Date().toLocaleString();
let date10=formatDate(new Date());
//
// let date1=new Date().toString();
// let date3=new Date().toLocaleString();
// let date2=new Date().toUTCString();

let date5=new Date(new Date()-24*60*60*1000);
// let date6=new Date()-1;
let date7=new Date(new Date().setHours(24,0,0,0))-new Date();

let date8=new Date().setHours(24,0,0,0);

console.log(date8)
console.log(date5);
console.log(date7);
console.log(date9)
console.log(date10)

// console.log(date6)
// console.log(date1)
// console.log(date2)
// console.log(date3)
function formatDate() {
    let date = new Date();
    let seperator1 = "-";
    let seperator2 = ":";
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    let strHour=date.getHours();
    let strMinute=date.getMinutes();
    let strSecond=date.getSeconds();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if(strHour>=0&&strHour<=9){
        strHour="0"+strHour;
    }
    if(strMinute>=0&&strMinute<=9){
        strMinute="0"+strMinute;
    }
    if(strSecond>=0&&strSecond<=9){
        strSecond="0"+strSecond;
    }

    let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + strHour + seperator2 + strMinute
            + seperator2 + strSecond;
    return currentdate;
}
