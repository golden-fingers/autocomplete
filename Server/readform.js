var fs = require('fs');
var result = fs.readFileSync('./app/form.html','utf8');

module.exports = function (req,res) {
  res.end(result);
};
