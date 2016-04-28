var http = require("http");

var storage = {
    countries : [
        {id: "cz", name: "Czech Republic", publisher: [{id:"1", name:"czPub1"},{id:"2", name:"czPub2"}]},
        {id: "d", name: "Deutschland", publisher: [{id:"1", name:"dPub1"},{id:"2", name:"dPub2"}]},
        {id: "h", name: "Hungary", publisher: [{id:"1", name:"hPub1"},{id:"2", name:"hPub2"}]}
    ],
 
    getCountry : function(id) {
        for (var i = 0; i < this.countries.length; i++)
            if (this.countries[i].id == id)
                return this.countries[i];
        return null;
    },
    getCountries : function() {
        return this.countries;
    },
    deleteCountry : function(id) {
        console.log(id);
        for (var i = 0; i < this.countries.length; i++)
            if (this.countries[i].id == id){
                this.countries[i] = [];
            }
        return this.countries;
    },
    getPublisher : function(id){
        return this.getCountry(id).publisher;
    }
 
};
 
var allowedOrigins = ["http://cors.eu-gb.mybluemix.net", "http://localhost:8888"];

http.createServer(function(req, res) {
 
    if (req.method == "GET") {
            if(req.headers['origin']){
                if(allowedOrigins.indexOf(req.headers['origin']) != -1){
                    res.setHeader('Access-Control-Allow-Origin', req.headers['origin']);
                    res.setHeader('Access-Control-Allow-Methods', "GET, PUT, POST, DELETE, OPTIONS");
                    res.setHeader('Access-Control-Allow-Headers', "Content-Type");
                    console.log('prisel GET');
                    res.end(JSON.stringify(storage.getCountries()));
                    res.end("get v poradku");
                }
                else{
                    res.writeHead(405, {'Content-Type': 'text/plain'});
                    res.end('Done.');
                }
            }
            else{
                res.writeHead(405, {'Content-Type': 'text/plain'});
                res.end('Done.');
            }
/*
            console.log('prisel GET');
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(storage.getCountries()));
            res.end("get v poradku");*/
    } 
    else if (req.method == "OPTIONS"){
        	if(req.headers['origin']){
                if(allowedOrigins.indexOf(req.headers['origin']) != -1){
                    res.setHeader('Access-Control-Allow-Origin', req.headers['origin']);
                    res.setHeader('Access-Control-Allow-Methods', "GET, PUT, POST, DELETE, OPTIONS");
                    res.setHeader('Access-Control-Allow-Headers', "Content-Type");
                    console.log('prisel OPTIONS');
                    res.end("options v poradku");
                }
                else{
                    res.writeHead(405, {'Content-Type': 'text/plain'});
                    res.end('Done.');
                }
            }
            else{
                res.writeHead(405, {'Content-Type': 'text/plain'});
                res.end('Done.');
            }
    }
    else if (req.method == "POST"){
    		if(req.headers['origin']){
                if(allowedOrigins.indexOf(req.headers['origin']) != -1){
                    res.setHeader('Access-Control-Allow-Origin', req.headers['origin']);
                    res.setHeader('Access-Control-Allow-Methods', "GET, PUT, POST, DELETE, OPTIONS");
                    res.setHeader('Access-Control-Allow-Headers', "Content-Type");
                    res.writeHead(201, {'Content-Type': 'text/plain'});
                    console.log('prisel pPOST');
                    res.end(JSON.stringify(storage.getCountry("cz")));
                    res.end("post v poradku");
                }
                else{
                    res.writeHead(405, {'Content-Type': 'text/plain'});
                    res.end('Done.');
                }
            }
            else{
                res.writeHead(405, {'Content-Type': 'text/plain'});
                res.end('Done.');
            }
    }
    else if (req.method == "DELETE"){
    		if(req.headers['origin']){
                if(allowedOrigins.indexOf(req.headers['origin']) != -1){
                    res.setHeader('Access-Control-Allow-Origin', req.headers['origin']);
                    res.setHeader('Access-Control-Allow-Methods', "GET, PUT, POST, DELETE, OPTIONS");
                    res.setHeader('Access-Control-Allow-Headers', "Content-Type");
                    console.log('prisel DELETE');
                    res.end(JSON.stringify(storage.getCountry("cz")));
                    res.end("delete v poradku");
                }
                else{
                    res.writeHead(405, {'Content-Type': 'text/plain'});
                    res.end('Done.');
                }
            }
            else{
                res.writeHead(405, {'Content-Type': 'text/plain'});
                res.end('Done.');
            }
    }
    else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Done.');
    }
 
}).listen(8080, '127.0.0.1');

