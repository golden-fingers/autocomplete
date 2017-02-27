var fs = require('fs');
var search = require('./searchdata.js');
var arr =[];
function converttoarray(searchdata,req,res) {
  if(arr == ""){
    var txt = fs.readFileSync('./words.txt','utf8');
    arr = txt.split("\n");
    search.searchdata(searchdata,req,res,arr);
  } else {
   search.searchdata(searchdata,req,res,arr);
   }
}
module.exports = {
  converttoarray: converttoarray
};
