function router(msg,req,res,path) {
  if(path == 'GET /'){
    var show = require('./readform.js')
    show.show(res);
    console.log("get");
  }else{
    var createarraysearch = require('./bodyparser.js')
    createarraysearch.converttoarray(msg,req,res);
    console.log("post");
  }
}
module.exports = {
  router : router
}
