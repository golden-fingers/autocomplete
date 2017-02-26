var shot = require('shot');
var test = require('tape');

var homepagehandler = require('../server/readform.js');
var router = require('../index.js')

console.log(homepagehandler);

test('GET /: should return from form.html', function(t){
  shot.inject(homepagehandler.show, { method: 'GET' , url: '/'},
  function(res){
    console.log("res"+res);
    var ind = res.payload.indexOf('input');
    t.notEqual(ind,-1,'input is in somewhere in the form');
    t.equal(res.statusCode , 200, 'got status 200, res successful');
    t.end();
  });
});
