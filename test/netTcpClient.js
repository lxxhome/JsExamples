//client.js
var net = require('net') ;
var client = net.connect({port: 8000},function(){
    client.name = '客户机1';
    client.write(client.name + ' 上线了！\n');
    // client.end(client.name + ' 下线了！\n');
    client.on("data", function(data) {
        console.log(data.toString());
    });
});