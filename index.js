var http = require('http');
var fs = require('fs');
var url = require('url');
//console.log("after fs require");
var result = fs.readFileSync('./form.html','utf8');
//console.log("result" ,result);
http.createServer(function(req,res){
  console.log("inside http createServer");
  //console.log(req);
  var msg = req.url;
  console.log('Recieved: ' + msg);
  console.log(req.method);
   res.end(result);
 }).listen(process.env.PORT || 8080,function(){
   console.log('Listening on 8080');
 });
