var fs = require('fs');
var result = fs.readFileSync('./form.html','utf8');

function show(res){
  res.end(result);
}

  module.exports = {
    show : show
  }
