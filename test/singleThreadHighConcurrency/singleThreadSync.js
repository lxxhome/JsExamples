var http = require('http');function sleep(time) {    var _exit = Date.now() + time * 1000;    while( Date.now() < _exit ) {}    return ;
}var server = http.createServer(function(req, res){
    sleep(10);
    res.end('server sleep 10s');
});

server.listen(8080);