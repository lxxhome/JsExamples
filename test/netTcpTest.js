let net = require('net');
let clients = 0;

//配合netTcpClient.js测试
let server = net.createServer(function (client) {
    clients++;
    let clientId = clients;
    console.log('Client connected:', clientId)

    client.on("error", (err) => {
            console.log("Caught flash policy server socket error: ")
            console.log(err.stack)
        }
    )

    client.write('Welcome client:' + clientId + '\r\n');

    // client.emit('data','ok')

    client.on('end', function () {
        console.log('Client disconnected:', clientId)
    })
    client.pipe(client);
})

server.listen(8000, function () {
    console.log('Server started on port 8000');
})