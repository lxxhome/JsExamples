process.nextTick(()=>{
    console.log('nextTick延迟执行1');
});
process.nextTick(()=>{
    console.log('nextTick延迟执行2');
    // setImmediate(()=>{
    //     console.log("setImmediate强势插入");
    // })
});
setImmediate(()=>{
    console.log('setImmediate延迟执行1');
    process.nextTick(()=>{
        console.log("强势插入");
    })
})
setImmediate(()=>{
    console.log("setImmediate延迟执行2");
})
console.log("正常执行");