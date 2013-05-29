/*! Interface v0.0.1 - MIT license */
;(function(){

  'use strict';

  /**
   * Module dependencies
   */
  function getFunctions(Class){
    if(typeof Class === 'function'){
      return Class.prototype;
    } else if(typeof Class === 'object'){
      return Class;
    } else {
      throw new Error("Wrong object pass to this function, only Class (function) or Object is allowed.");
    }
  }

  /**
   * @param {}
   * @return {}
   * @api public
   */

  function Interface(contract) {

    // get the functions
    var obj = getFunctions(contract);

    // init the contract
    this._contract = {}

    // copy only functions to implements in the contract
    for(var key in obj){
      if(Object.hasOwnProperty.call(obj, key) && typeof obj[key] === "function"){
        this._contract[key] = obj[key];
      }
    }

  };

  Interface.prototype.implement = function(Class){

    // 1 - Determine the type of object
    var obj = getFunctions(Class);

    // 2 - check the interface contract
    for(var fn in this._contract){

      // check if function exists
      if(typeof obj[fn] !== "function"){
        throw new Error("Function '" + fn + "' is not implemented in class.");
      }

      // check if it implements the right number of arguments
      if(obj[fn].length !== this._contract[fn].length){
        throw new Error("Function '" + fn + "' expect " + this._contract[fn].length + " parameters.");
      }

    }

  };

  /**
   * Module exports
   */
  if(module && module.exports)            module.exports = Interface;
  else if(typeof define === "function")   define(function(){return Interface;});
  else                                    window.Interface = Interface;

})();
