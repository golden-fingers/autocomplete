
function searchdata(searchdata,req,res,arr){
  console.log("inside search");
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

  searchdata: searchdata

};
