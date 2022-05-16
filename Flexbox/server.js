'use strict';
var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    var url = req.url;
    if (req.url == '/') {
        url = '/html/main.html';
    }
    if (req.url == '/favicon.ico') {
        return res.writeHead(404);
    }
    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + url));
}).listen(port);
