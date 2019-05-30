var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6];

// for(var f=0;f<10;f++){
//     console.log(a[f])
// }
for(let num of a){

}
