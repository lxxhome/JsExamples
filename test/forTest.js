// let array=[1,3,4,5,6];

// for(let num in array)
// {console.log(array[num])};

// console.log('======')
// for(let num of array){
//     console.log(num);
// }

// console.log('======')
// array.forEach(item=>{
//     console.log(item);
// })

// console.log('======')
// let arrLen=array.length;
// for(let i=0;i<arrLen;i++){
//     console.log(array[i])
// }

let res = [{
    _id: '5da4316df4b747bdaec05e86',
    lottery_name: 'apple',
    multiple: 3,
    created_time: '2019 - 10 - 14T08: 27: 25.000Z',
    number: 1000,
    rate: 0.1,
    endIndex: 1000,
    startIndex: 1
},
{
    _id: '5da82ccd87dcd3e5a7fb6ac3',
    lottery_name: 'gap',
    mutliple: 10,
    created_time: '2019 - 10 - 17T08: 56: 45.129Z',
    number: 1000,
    rate: 0.1,
    endIndex: 2000,
    startIndex: 1001
},
{
    _id: '5da82e3f87dcd3e5a7fb6ac4',
    lottery_name: 'crystle',
    mutliple: 4,
    created_time: '2019 - 10 - 17T09: 02: 55.838Z',
    number: 1000,
    rate: 0.1,
    endIndex: 3000,
    startIndex: 2001
},
{
    _id: '5da82f6987dcd3e5a7fb6ac5',
    lottery_name: '777',
    mutliple: 20,
    created_time: '2019 - 10 - 17T09: 07: 53.364Z',
    number: 1000,
    rate: 0.1,
    endIndex: 4000,
    startIndex: 3001
},
{
    _id: '5da82f9687dcd3e5a7fb6ac6',
    lottery_name: 'eddy',
    mutliple: 8,
    created_time: '2019 - 10 - 17T09: 08: 38.678Z',
    number: 1000,
    rate: 0.1,
    endIndex: 5000,
    startIndex: 4001
},
{
    _id: '5da82fba87dcd3e5a7fb6ac7',
    lottery_name: 'Q',
    mutliple: 2,
    created_time: '2019 - 10 - 17T09: 09: 14.511Z',
    number: 1000,
    rate: 0.1,
    endIndex: 6000,
    startIndex: 5001
},
{
    _id: '5da82ffd87dcd3e5a7fb6ac8',
    lottery_name: 'empty',
    mutliple: 2,
    created_time: '2019 - 10 - 17T09: 10: 21.214Z',
    number: 4000,
    rate: 0.4,
    endIndex: 10000,
    startIndex: 6001
}]

for (let good in res) {
    console.log(good); // 输出为索引项0，1，2，3……
    // 取出当前奖项的数据区域，例：1-1000为apple,1001-2000为gap.
    let minNum = res[good]["startIndex"];  //expected out 1,1001,2001……
    let maxNum = res[good].endIndex; // expected out 1000,2000,3000……

    console.log(minNum,maxNum);
}
