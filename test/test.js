var expect = require('chai').expect
  , Interface = require('../interface.js')
  , MyInterface = new Interface({
      fnNoParam : function(){}
    , fnOneParam : function(toto){}
    })
  ;



/*
 * CORE
 */
describe('Interface Constructor', function () {

  it('should not throw an error if a Class is pass to the constructor', function () {
    expect(function(){
      new Interface(function(){});
    }).to.not.throw(Error);
  });

  it('should not throw an error if a Obj is pass to the constructor', function () {
    expect(function(){
      new Interface({});
    }).to.not.throw(Error);
  });

  it('should     throw an error if a wrong type is pass to the constructor', function () {
    expect(function(){
      new Interface("A damn string");
    }).to.throw(Error);
  });

});



/*
 * Wrong type
 */
describe('Interface implement on a wrong type', function () {

  it('should     throw an error if wrong type pass to implement', function () {
    var DummyClass = "A damn string";
    expect(function(){
      MyInterface.implement(DummyClass);
    }).to.throw(Error);
  });

});



/*
 * CLASS
 */
describe('Interface implement on a Class', function () {

  it('should     throw an error if a function is missing', function () {
    var DummyClass = function(){};
    expect(function(){
      MyInterface.implement(DummyClass);
    }).to.throw(Error);
  });

  it('should     throw an error if a function does not have the right number of arguments', function () {
    var DummyClass = function(){};
    DummyClass.prototype.fnNoParam = function(){};
    DummyClass.prototype.fnOneParam = function(){};
    expect(function(){
      MyInterface.implement(DummyClass);
    }).to.throw(Error);
  });

  it('should not throw an error if the interface is rightly implemented', function () {
    var DummyClass = function(){};
    DummyClass.prototype.fnNoParam = function(){};
    DummyClass.prototype.fnOneParam = function(firstParam){};
    expect(function(){
      MyInterface.implement(DummyClass);
    }).to.not.throw(Error);
  });

});



/*
 * OBJ
 */
describe('Interface implement on an Object', function () {

  var MyInterface = new Interface({
        string  : 'a string'
      , number  : 3
      , array   : []
      , object  : {}
      , fnNoParam : function(){}
      , fnOneParam : function(toto){}
      })
    ;

  it('should     throw an error if a member is missing', function () {
    var DummyClass = {};
    expect(function(){
      MyInterface.implement(DummyClass);
    }).to.throw(Error);
  });

  it('should     throw an error if a variable is missing', function () {
    var DummyClass = {
      fnNoParam : function(){}
    , fnOneParam : function(firstParam){}
    };
    expect(function(){
      MyInterface.implement(DummyClass);
    }).to.throw(Error);
  });

  it('should     throw an error if a function is missing', function () {
    var DummyClass = {
      string  : 'a string'
    , number  : 3
    , array   : []
    , object  : {}
    };
    expect(function(){
      MyInterface.implement(DummyClass);
    }).to.throw(Error);
  });

  it('should     throw an error if a function does not have the right number of arguments', function () {
    var DummyClass = {
      fnNoParam : function(){}
    , fnOneParam : function(){}
    };
    expect(function(){
      MyInterface.implement(DummyClass);
    }).to.throw(Error);
  });

  it('should not throw an error if the interface is rightly implemented', function () {
    var DummyClass = {
      string  : 'a string'
    , number  : 3
    , array   : []
    , object  : {}
    , fnNoParam : function(){}
    , fnOneParam : function(firstParam){}
    };
    expect(function(){
      MyInterface.implement(DummyClass);
    }).to.not.throw(Error);
  });

});

