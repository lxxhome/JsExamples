const ioredis=require('ioredis');

let actoken=new ioredis({
    host:'127.0.0.1',
    port:6379,
    db:1
})

actoken.get('auth~30903.RA0BI003HINVSEKQECMFR0A3JAG5I33715228373850080.27454795222729445.31037192',(err,value)=>{
    console.log(JSON.stringify(value))
})


