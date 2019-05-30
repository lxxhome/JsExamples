let async =require('async');
async.eachLimit(["123", "456", "789"], 2, function(item, callback){

    console.log(item);
    callback();// 必须调用，才能触发下一个任务执行

}, function(error){

    if(error){
        console.error("error: " + error);
    }

});