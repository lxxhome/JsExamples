
let test = { a: '1', b: 2 };

// console.log(test.a, test.c);

// if(test.c===undefined){
//     console.log(test.a,test.c);
// }else{
//     console.log('a');
// }

try {
    if (test.c.a === 1) {
        console.log(test);
    } else {
        console.log(test.c);
    }
}catch(ex){
    
}

// let a = undefined;
// let b;
// if (a > 1) { console.log('大于1'); } else { console.log('小于等于1') }
// if (b > 1) { console.log('大于1'); } else { console.log('小于等于1') }
// console.log(b)


let a='';
if(a){
    console.log('Empty string is true value');
}else{
    console.log('Empty string is false value');
}