var config =require("./config.js");

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({  
  extended: true
})); 

//mail
var mail = require("./lib/mail/router.js");
//bdd
var mongoose = require('mongoose');
mongoose.connect(config.mongod.addr,config.mongod.bdOptions);
var db = mongoose.connection;
var Schema = mongoose.Schema;
//var mongoStore =require('connect-mongo')(expressSession);
var schemas= require("./lib/db/schema.js");
schemas.init(db,Schema);
schemas= schemas.schemas;
//lib
var form= require("./lib/form/router.js");
form.init(app,schemas, mail);

app.use('/public', express.static(__dirname + '/public'));
app.listen(config.port);
console.log("server start");