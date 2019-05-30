let obj={key:2};

function f(obj){
    obj.key=1;
}

function f2(obj){
    const key=Object.prototype.hasOwnProperty.call(obj,'key')?obj.key:1;
}

//f(obj)
f2(obj)
console.log(obj)