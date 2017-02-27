
var show = require('./readform.js');

module.exports = function (msg,req,res,path) {
  if(path == 'GET /') {
    show(req,res);
  }else if(path == 'POST /'){
    var createarraysearch = require('./bodyparser.js');
    createarraysearch.converttoarray(msg,req,res);
  }
  else{
    res.end("Not Found");
  }
};
