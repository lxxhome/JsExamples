const arr = { data: [{ age: 13 }, { name: 'lxx' }], title: 'test' };
// arr.data=arr.data[0];
let {data}=arr;
arr.data=data[0];
console.log(arr.data,data);
console.log(arr.title);

// let {data,title,value=true}=arr;
// arr.data=data[0];
// data.splice(0,1);
// console.log(data,title);
// console.log(value);



