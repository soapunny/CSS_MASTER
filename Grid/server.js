
'use strict';
const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((request, response) => {
    const path = url.parse(request.url, true).pathname; // url���� path ����
    if (request.method === 'GET') { // GET ��û�̸�
        if (path === '/') { // �ּҰ� /�̸�
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(__dirname + '/html/main.html', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
        } else if (path === '/group') { // �ּҰ� /about�̸�
            response.writeHead(200, { 'Content-Type': 'text/html' }); // header ����
            fs.readFile(__dirname + '/html/grid_template.html', (err, data) => { // ���� �д� �޼ҵ�
                if (err) {
                    return console.error(err); // ���� �߻��� ���� ����ϰ� ����
                }
                response.end(data, 'utf-8'); // �������� ����
            });
        } else if (path === '/auto') { // �ּҰ� /�̸�
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(__dirname + '/html/auto.html', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
        } else if (path === '/line') { // �ּҰ� /�̸�
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(__dirname + '/html/line_naming.html', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
        } else if (path === '/fraction') { // �ּҰ� /�̸�
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(__dirname + '/html/fraction.html', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
        } else if (path === '/items') { // �ּҰ� /�̸�
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(__dirname + '/html/items.html', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
        } else if (path === '/autoColumns') { // �ּҰ� /�̸�
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(__dirname + '/html/autoColumns.html', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
        } else if (path === '/minMax') { // �ּҰ� /�̸�
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(__dirname + '/html/minMax.html', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
        } else if (path === '/minMaxContent') { // �ּҰ� /�̸�
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(__dirname + '/html/minMaxContent.html', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
        } else { // ��Ī�Ǵ� �ּҰ� ������
            response.statusCode = 404; // 404 ���� �ڵ�
            response.end('�ּҰ� �����ϴ�');
        }
    }
}).listen(11080);