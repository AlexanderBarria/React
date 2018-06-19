'use strict'
var request = require("request");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//crear cliente
var redis = require('redis'),
client = redis.createClient();

client.on('error',function(err){
  console.log('Error'+ err);
});

/*client.get('foo',function(err, reply){
  console.log(reply);
});*/

//carga rutas

//modllerwares de bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//configurar cabeceras y cors

//rutas bodyParser
app.get('/bitcoins',function(re, res){
  var options = {
    method: 'GET',
    url: 'https://www.alphavantage.co/query',
    qs:
     { function: 'DIGITAL_CURRENCY_INTRADAY',
       symbol: 'BTC',
       market: 'EUR',
       apikey: 'demo' }
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
     var resultado = JSON.parse(body);
     //expone datos de la api
     res.send(resultado);
     //aca debo pasar data del json y setear enredis
     client.set('1','hola hectrasa');

  });
})


module.exports = app;
