var http = require('http');
var express = require('express');
var fs = require('fs');
// var bodyParser = require("body-parser");
//Lets define a port we want to listen to
const PORT=8080; 

// app.use(bodyParser.json());
var app = express();
//We need a function which handles requests and send response
// function handleRequest(request, response){
//     response.end('It Works!! Path Hit: ' + request.url);
// }
// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true }));
app.get('/angular', function(req, res,callback) {
	res.json('angular');
	
});


app.post('/angular', function(req, res) {
	var body = "";
	filePath = _dirname + 'archive.txt';
	request.on('data', function(data){
		body += data;
	});
	request.on('end', function (){
		fs.appendFile(filePath, body, function(){
			respond.end()
		});
	});

});
 // app.post('/login', function(req, res) {
 //     console.log('Processing request...');
 //     res.sendFile('/success.html');
 // });


var server = http.createServer(app);


server.listen(PORT, function(){
    
    console.log("Server listening on: http://localhost:%s", PORT);
});

module.exports = app;