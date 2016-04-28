var server = require('websocket').server, http = require('http');

var socket = new server({
    httpServer: http.createServer().listen(8000)
});

socket.on('request', function(request) {
    var connection = request.accept(null, request.origin);

    connection.on('message', function(message) {
        console.log(message.utf8Data);
        connection.sendUTF('Hello from server!');
    });

    connection.on('close', function(connection) {
    	
    });
}); 