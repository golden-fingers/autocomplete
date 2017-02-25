
function searchdata(searchdata,req,res,arr){
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
res.end(JSON.stringify(readyarr));
}

module.exports = {

  searchdata: searchdata

};
