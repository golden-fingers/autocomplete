var fs = require('fs');
var result = fs.readFileSync('./form.html','utf8');
console.log(result);

  res.end(result);
