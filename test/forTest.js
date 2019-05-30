let array=[1,3,4,5,6];

for(let num in array)
{console.log(array[num])};

console.log('======')
for(let num of array){
    console.log(num);
}

console.log('======')
array.forEach(item=>{
    console.log(item);
})

console.log('======')
let arrLen=array.length;
for(let i=0;i<arrLen;i++){
    console.log(array[i])
}

