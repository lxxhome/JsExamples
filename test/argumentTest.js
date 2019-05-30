/**
 * ES5 参数默认
 * @param {url} url 
 * @param {*} timeout 
 * @param {*} callback 
 */
function makeRequest(url, timeout, callback) {
    timeout = (typeof timeout != "undefined") ? timeout : 2000;
    callback = (typeof callback != "undefined") ? callback : function () { }
    //函数其余部分

}

/**
 * ES6 参数默认
 * @param {*} url 
 * @param {*} timeout 
 * @param {*} callback 
 */
function makeRequestEs6(url, timeout = 2000, callback = function () { }) {
    //函数其余部分
}

makeRequest("/foo");
makeRequest("/foo", 500);
makeRequest("/foo", 500, function (body) {
    doSomething(body);
});

function mixArgs(first,second){
    "use strict";

    console.log(first===arguments[0]);
    console.log(second===arguments[1]);
    first='c';
    second='d';
    console.log(first===arguments[0]);
    console.log(second===arguments[1]);
}

// mixArgs('a','b');


function mixArgss(first,second="b"){
    console.log(arguments.length);
    console.log(first===arguments[0]);
    console.log(second===arguments[1]);
    first="c";
    second="d";
    console.log(first===arguments[0]);
    console.log(second===arguments[1]);
}

// mixArgss("a");

let value=5;
function getValue(){
    return value++;
}

function add(first,second=getValue()){
    return first+second
}

console.log(add(1,1));
console.log(add(1));
console.log(add(1));
