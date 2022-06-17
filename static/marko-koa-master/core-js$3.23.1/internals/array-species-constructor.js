$_mod.def("/core-js$3.23.1/internals/array-species-constructor", function(require, exports, module, __filename, __dirname) { var isArray = require('/core-js$3.23.1/internals/is-array'/*'../internals/is-array'*/);
var isConstructor = require('/core-js$3.23.1/internals/is-constructor'/*'../internals/is-constructor'*/);
var isObject = require('/core-js$3.23.1/internals/is-object'/*'../internals/is-object'*/);
var wellKnownSymbol = require('/core-js$3.23.1/internals/well-known-symbol'/*'../internals/well-known-symbol'*/);

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};

});