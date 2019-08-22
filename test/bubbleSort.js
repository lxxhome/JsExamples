const arr=[1,30,20,50,60,134];

let len=arr.length;
console.log(len);
let temp;
let flag=false;
for(let i=0;i<len-1;i++){
    flag=false;
    for(let j=i+1;j<len;j++){
        if(arr[i]>arr[j]){
            flag=true;
            debugger;
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
    if(flag===false){
        break;
    }
    
}
console.log(arr);