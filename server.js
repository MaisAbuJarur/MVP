var url = require('url');
var http = require('http');
var path = require('path');


var images = {};

var server = http.createServer(function(request, response) {

if (request.method === 'POST') {



	response.end('done');
 } else if (request.method === 'GET') {

}

require('./server').listen(8000, '127.0.0.1');
console.log('Listening on port 8000...');