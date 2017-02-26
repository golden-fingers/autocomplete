var fs = require('fs');
//var arr;
var search = require('./searchdata.js');
function converttoarray(searchdata,req,res,arr) {

  if(arr.length == 0){
    var txt = fs.readFileSync('./words.txt','utf8');
    arr = txt.split("\n");
   //console.log("before search");
   search.searchdata(searchdata,req,res,arr);
   //console.log("NULL");
  } else {
   search.searchdata(searchdata,req,res,arr);
   //console.log("NOT nULL");
   }
}
module.exports = {
  converttoarray: converttoarray
};
