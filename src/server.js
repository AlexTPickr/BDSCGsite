//libraries
var express = require('express');
var MongoClient = require('mongodb');
var bodyParser = require('body-parser');
var db = require('./config/db');
var server = require('./config/port');
var mongoose = require('mongoose');

//config
var app = express();
var port = server.port;

//database connection

mongoose.connect('mongodb://localhost/dbsuperdb');
app.use(bodyParser.urlencoded({
    extended: true
}));

//main listener
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    require('./app/routes')(app, db);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
});