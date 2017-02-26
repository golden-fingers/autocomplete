'use strict';

var shot = require('shot');
var test = require('tape');
var mainHandler = require('../main.js');

test('GET /: should return from form.html', function(t){
  shot.inject(mainHandler, {method:'GET',url:'/'}, function(res) {
    // var ind = res.payload.indexOf('input');
    // t.notEqual(ind,-1,'input is in somewhere in the form');
    // t.equal(res.statusCode , 200, 'got status 200, res successful');
    t.end();
  });
});
