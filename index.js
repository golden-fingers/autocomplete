var http = require('http');
var router = require('./root.js');
var url = require('url');


http.createServer(function(req,res){
  var msg = req.url.replace("/" , "");
  var path = req.method + ' ' + req.url.charAt(0);
  var arr =[];

 try {

   router.router(msg,req,res,arr,path);
 } catch(err) {

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
