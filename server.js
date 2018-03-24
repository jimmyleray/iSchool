"use strict";
exports.__esModule = true;
var express = require("express");
var compression = require("compression");
var app = express();
app.use(compression());
app.set('port', process.env.PORT || 1234);
app.use(express.static(__dirname + '/dist'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/build/index.html');
});
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
