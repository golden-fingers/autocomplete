var qs = require('querystring');
var fs = require('fs');
var arr;


function converttoarray(searchdata,req,res) {


  if(arr == null){
    var txt = fs.readFileSync('./words.txt','utf8');
    arr = txt.split("\n");

   Searchdata(searchdata,req,res);


 } else {
   ready = Searchdata(searchdata,req,res);
 }

}

function Searchdata(searchdata,req,res) {
  var readyarr = arr.filter(function(value) {
    var commit ;
       if (value.search(searchdata) > -1){
         if (value.search(searchdata) == 0) {
             commit = value ;

             return commit;
         }
       }


});

readyarr = readyarr.slice(1, 6);
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  res.end(JSON.stringify(readyarr));
}

module.exports = {

  converttoarray: converttoarray

};
