let brand='VEROMODA';
let channel=1;
let query={phone:'18289098890'};

Object.assign(query,{brand},{channel});

console.log(query);
console.log(JSON.stringify(query))