var http = require('http');
http.createServer(function(req,res){
   res.end('Hello <Golden Fingers ..Start Coding Guys>');
 }).listen(8080,function(){
   console.log('Listening on 8080');
 });
