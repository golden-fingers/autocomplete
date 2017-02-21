var http = require('http');
var fs = require('fs');
console.log("after fs require");
var result = fs.readFileSync('./form.html','utf8');
console.log("result" ,result);
http.createServer(function(req,res){
  console.log("inside http createServer");
   res.end(result);
 }).listen(process.env.PORT || 8080,function(){
   console.log('Listening on 8080');
 });
