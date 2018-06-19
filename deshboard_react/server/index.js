'use strict'
var port = 3400;
var app = require('./app');

/*var redis = require('redis'),
client = redis.createClient();

client.on('error',function(err){
  console.log('Error'+ err);
});*/

/*client.set("string key", "string val", redis.print);
client.hset("hash key", "hashtest 1", "some value",redis.print);
client.hset(["hash key", "hashtest 2", "some value"],redis.print );
client.hkeys("hash key", function(err, replies){
  console.log(replies.length + "replies:");
  replies.forEach(function(reply, i){
    console.log("    " + i + ": "+ reply);
  });
  client.quit();
})*/

//levanta servidor en localhost:3400/bitcoins
app.listen(port,() => {
  console.log("el servidor node y express esta conectado");
});
