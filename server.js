var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var url = "mongodb://localhost:27017/";
var app = express();

app.get('/', function (req, res) {
  var data = MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("dbsuperdb");
    var query = { rarity : "R" };
    dbo.collection("cards").find(query).toArray(function(err, result) {
      if (err) throw err;
      //console.log(result);
      db.close();
      res.send(result);
    });
  });
})

app.listen(8080);
console.log('Listening on port 8080...');