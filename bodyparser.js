var fs = require('fs');
var arr;
var search = require('./searchdata.js');
function converttoarray(searchdata,req,res,arr) {
  if(arr == null){
    var txt = fs.readFileSync('./words.txt','utf8');
    arr = txt.split("\n");
   console.log("before search");
   ready = search.searchdata(searchdata,req,res,arr);
  } else {
   ready = search.searchdata(searchdata,req,res,arr);
   }
}
module.exports = {
  converttoarray: converttoarray
};
