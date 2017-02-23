function router(msg,req,res,arr,path) {
  if(path == 'GET /'){
    require('./readform.js')
    console.log("get");
  }else{
    require('./bodyparser.js')
    console.log("post");
  }
}
module.exports = {
  router : router

}
