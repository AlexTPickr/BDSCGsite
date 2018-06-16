//libraries
var express = require('express');
var MongoClient = require('mongodb');
var bodyParser = require('body-parser');
var db = require('./config/db');
var server = require('./config/port');

//config
var app = express();
var port = server.port;

//database connection
MongoClient.connect(db.url);
app.use(bodyParser.urlencoded({
    extended: true
}));

//main listener
MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    
    require('./app/routes')(app, database);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
});