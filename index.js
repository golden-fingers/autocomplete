var http = require('http');
var fs = require('fs');
var queryString = require('querystring');
var bodyparser = require('./bodyparser.js');
var url = require('url');
//console.log("after fs require");
var result = fs.readFileSync('./form.html','utf8');

http.createServer(function(req,res){
try {
  console.log("inside http createServer");
  var msg = req.url.replace("/" , "");
if (req.method =='POST') {
   bodyparser.converttoarray(msg,req,res);
}
res.end(result);
} catch (e) {
  console.log(e);
}

 }).listen(process.env.PORT || 8076 ,function(){
   console.log('Listening on 8076');
 });
