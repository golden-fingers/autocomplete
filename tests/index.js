'use strict';

var shot = require('shot');
var test = require('tape');
var mainHandler = require('../main.js');

test('GET /: should return from form.html', function(t){
  shot.inject(mainHandler, {method:'GET',url:'/'}, function(res) {
     var ind = res.payload.indexOf('input');
     t.notEqual(ind,-1,'input is in somewhere in the form');
     t.equal(res.statusCode , 200, 'got status 200, res successful');
    t.end();
  });
});

test('POST /: should return array', function(t){
  shot.inject(mainHandler, {method:'POST',url:'/a'}, function(res) {
    t.equal(res.payload , '["aa","aal","aalii","aam","aardvark"]',
     'test success when array of words equal null');
    t.end();
  });
});

test('POST /: should return array', function(t){
  shot.inject(mainHandler, {method:'POST',url:'/a'}, function(res) {
  });
  shot.inject(mainHandler, {method:'POST',url:'/ab'}, function(res) {
    t.equal(res.payload , '["abac","abaca","abacate","abacay","abacinate"]',
     'test success when array of words not null');
    t.end();
  });
});
test('POST /: should return from Not Found Page', function(t){
  shot.inject(mainHandler, {method:'asd',url:'/a'}, function(res) {
  t.equal(res.payload , 'Not Found',
     'Double BOOM !');
    t.end();
  });
});
