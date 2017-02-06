var http = require('http');
var express = require('express');
// var fs = require('fs');
// var bodyParser = require("body-parser");
//Lets define a port we want to listen to
var PORT= process.env.PORT || 8080; 

// app.use(bodyParser.json());
var app = express();

app.set('views', __dirname + '/v2');
app.set('view engine', 'html');
app.use(express.static(__dirname + '/v2'));
//We need a function which handles requests and send response
// function handleRequest(request, response){
//     response.end('It Works!! Path Hit: ' + request.url);
// }
// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req, res) {
	res.render('index');
	
})

// require('./config/middleware.js')(app, express);

// app.post('/', function(req, res) {
// 	// console.log(req.data)
// 	var body = "";
// 	// filePath = _dirname + 'archive.txt';
// 	req.on('data', function(data){
// 		body += data;
// 	})
// 	respond.end(body)
	// request.on('end', function (){
	// 	fs.appendFile(filePath, body, function(){
	// 		respond.end()
	// 	})
	// })


// })
 // app.post('/login', function(req, res) {
 //     console.log('Processing request...');
 //     res.sendFile('/success.html');
 // });


// var server = http.createServer(app);


app.listen(PORT, function(){

	console.log("Server listening on: http://localhost:%s", PORT)
})

module.exports = app