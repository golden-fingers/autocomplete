var qs = require('querystring');
var fs = require('fs');
var arr;


function converttoarray(searchdata,req,res) {
  console.log("2",typeof res);

  if(arr == null){
    var txt = fs.readFileSync('./words.txt','utf8');
    arr = txt.split("\n");
   console.log("6",typeof res);
   Searchdata(searchdata,req,res);
   console.log("3",typeof res);
   //res.end();

 } else {
   ready = Searchdata(searchdata,req,res);
  // console.log( "else" ,searchdata);
 }

}

function Searchdata(searchdata,req,res) {
console.log("4",typeof res ,typeof req);
console.log("4",res );
  var readyarr = arr.filter(function(value) {
    var commit ;
       if (value.search(searchdata) > -1){
         if (value.search(searchdata) == 0) {
             commit = value ;
            // console.log('commit' ,commit);
             return commit;
         }
       }


});

//console.log("readyarr" , readyarr);
readyarr = readyarr.slice(1, 6);
  // console.log(typeof res);
  console.log(readyarr);
  res.end(JSON.stringify(readyarr));
}

module.exports = {

  converttoarray: converttoarray

};
