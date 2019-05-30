//此函数表明var 赋值会被提升到作用域的顶层，但它们的赋值不会。
//同时表明typeof不再安全
function a(){
    console.log(typeof(nubmers)); //用let定义与用var定义，结果不同。
    // let nubmers; //typeof报错ReferenceError: nubmers is not defined
    var nubmers; //typeof不报错，输出为undefined
}
a();