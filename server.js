var config =require("./config.js");

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({  
  extended: true
})); 

//bdd
var mongoose = require('mongoose');
mongoose.connect(config.mongod.addr,config.mongod.bdOptions);
var db = mongoose.connection;
//var mongoStore =require('connect-mongo')(expressSession);
var schemas= require("./lib/db/schema.js");
schemas.init(db);
schemas= schema.schemas;
//lib
var form= require("./lib/form");
form.init(app,schemas);

app.use('/public', express.static(__dirname + '/public'));
app.listen(config.port);
console.log("server start");