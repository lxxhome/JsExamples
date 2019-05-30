const lodash=require('lodash');

let objects = [{'a': 1}, {'a': 2}];
let template={};
let test=objects.map((item)=>{
    let test1=lodash.cloneDeep(template);
    test1.a=item.a;
    return test1;
});

console.log(test);