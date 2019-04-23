var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;
app.get('/app.js', function (req, res) { return res.sendFile(path.join(__dirname, 'dist', 'bundle.js')); });
app.get('/', function (req, res) { return res.sendFile(path.join(__dirname, 'index.html')); });
app.listen(port, function () { return console.log("listening on port " + port); });
