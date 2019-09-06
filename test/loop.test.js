console.log('For loop');
for(let i=0;i<5;i++){
    console.log(i);
}

console.log('setTimeout');
for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log('st:'+i);
    },0);
}