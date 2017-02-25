var http = require('http');
var router = require('./Server/root.js');
var url = require('url');


http.createServer(function(req,res){
  var msg = req.url.replace("/" , "");
  var path = req.method + ' ' + req.url.charAt(0);

 try {
   //console.log(res);
   router.router(msg,req,res,path);

 } catch(err) {
   console.log(err);
   res.end('Not found');
}



 }).listen(process.env.PORT || 8076 ,function(){
   console.log('Listening on 8076');
 });
 // if (req.method =='POST') {
 //    bodyparser.converttoarray(msg,req,res);
 // }
 // res.end(result);
 // } catch (e) {
 //   console.log(e);
 // }
