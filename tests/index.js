var shot = require('shot');
var test = require('tape');

var homepagehandler = require('../server/readform.js');
var router = require('../index.js')

test('GET /: should return from form.html', function(t){
  shot.inject(homepagehandler, { method: 'GET' , url: '/'},
  function(res){
    var indexof = res.payload.indexof('input');
    t.equal(indexof,0,'input is in somewhere in the form');
    t.equal(res.statusCode , 200, 'got status 200, res successful');
    t.end();
  });
});
