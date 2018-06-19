var redis = require('redis'),
client = redis.createClient();
//var host = 'localhost';
//var port = 6379;


client.on('error',function(err){
  console.log('Error'+ err);
})
