var NEW = function(constructor, argArray) {
  //create a new object
  //set new object's_proto_ to constructor prototype
  //return new object
  var o = {};
  o.__proto__ = constructor.prototype;
  constructor.apply(o.args);

  return o;
};

var INSTANCEOF = function(obj, constructor){
  // Does the new object constructor = the prototype of the next object in the proto chain
  if(obj.__proto__ === constructor.prototype){
    return true
  } else if (obj.__proto__) {
    return INSTANCEOF(obj.__proto__, constructor)
  } else {
    return false;
  }
};
