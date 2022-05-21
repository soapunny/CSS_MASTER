
'use strict';
const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((request, response) => {
    const path = url.parse(request.url, true).pathname; 
    if (request.method === 'GET') { 
        if (path === '/') { 
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(__dirname + '/html/main.html', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
        } else if (path === '/css/main.css') {
            fs.readFile(__dirname + '/css/main.css', (err, data) => { 
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8'); 
            });
        } else if (path === '/group') { 
            response.writeHead(200, { 'Content-Type': 'text/html' }); 
            fs.readFile(__dirname + '/html/grid_template.html', (err, data) => { 
                if (err) {
                    return console.error(err); 
                }
                response.end(data, 'utf-8'); 
            });
        } else if (path === '/css/grid_template.css') {
            fs.readFile(__dirname + '/css/grid_template.css', (err, data) => { 
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8'); 
            });
        }else if (path === '/auto') {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(__dirname + '/html/auto.html', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
        } else if (path === '/css/auto.css') {
            fs.readFile(__dirname + '/css/auto.css', (err, data) => { 
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8'); 
            });
        } else if (path === '/line') { 
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(__dirname + '/html/line_naming.html', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
        } else if (path === '/css/line_naming.css') {
            fs.readFile(__dirname + '/css/line_naming.css', (err, data) => { 
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8'); 
            });
        } else if (path === '/fraction') { 
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(__dirname + '/html/fraction.html', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
        } else if (path === '/css/fraction.css') {
            fs.readFile(__dirname + '/css/fraction.css', (err, data) => { 
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8'); 
            });
        } else if (path === '/items') { 
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(__dirname + '/html/items.html', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
        } else if (path === '/css/items.css') {
            fs.readFile(__dirname + '/css/items.css', (err, data) => { 
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8'); 
            });
        } else if (path === '/autoColumns') { 
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(__dirname + '/html/autoColumns.html', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
        } else if (path === '/css/autoColumns.css') {
            fs.readFile(__dirname + '/css/autoColumns.css', (err, data) => { 
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8'); 
            });
        } else if (path === '/minMax') { 
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(__dirname + '/html/minMax.html', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
        } else if (path === '/css/minMax.css') {
            fs.readFile(__dirname + '/css/minMax.css', (err, data) => { 
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8'); 
            });
        } else if (path === '/minMaxContent') { 
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(__dirname + '/html/minMaxContent.html', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
        } else if (path === '/css/minMaxContent.css') {
            fs.readFile(__dirname + '/css/minMaxContent.css', (err, data) => { 
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8'); 
            });
        } else {
            response.statusCode = 404;
            response.end('Server Error');
        }
    }
}).listen(11080);