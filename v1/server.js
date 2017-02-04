var url = require('url');
var http = require('http');
var express = require('express');


var images = {};

var server = http.createServer(function(request, response) {


app.get('/store', 
  function(req, res) { 
      res.render('store');
  });

app.get('/board', 
  function(req, res) { 
      res.render('board');
  });



require('./server').listen(8000, '127.0.0.1');
console.log('Listening on port 8000...');