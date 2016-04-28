$(function(){
    var socket,name,content;

    $("#open").click(function(){
        if(!socket)
            socket = new WebSocket('ws://localhost:8000');
        socket.onopen = function () {
            socket.send("Hello from Jakub!");
        };

        socket.onmessage = function (message) {
            console.log(message.data);
        };

        socket.onerror = function (error) {
            console.log('WebSocket error: ' + error);
        };
    });
});

