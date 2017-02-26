
var show = require('./readform.js');

module.exports = function (msg,req,res,path) {
  if(path == 'GET /') {
    show(req,res);
  }else{
    var createarraysearch = require('./bodyparser.js');
    createarraysearch.converttoarray(msg,req,res);
  }
};
