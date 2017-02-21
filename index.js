var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
   fs.readFileSync(__dirname,'/form.html',utf8);
   res.end(fs);
 }).listen(process.env.PORT || 8080,function(){
   console.log('Listening on 8080');
 });
