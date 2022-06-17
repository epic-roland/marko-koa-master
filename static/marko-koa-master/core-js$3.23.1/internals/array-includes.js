$_mod.def("/core-js$3.23.1/internals/array-includes", function(require, exports, module, __filename, __dirname) { var toIndexedObject = require('/core-js$3.23.1/internals/to-indexed-object'/*'../internals/to-indexed-object'*/);
var toAbsoluteIndex = require('/core-js$3.23.1/internals/to-absolute-index'/*'../internals/to-absolute-index'*/);
var lengthOfArrayLike = require('/core-js$3.23.1/internals/length-of-array-like'/*'../internals/length-of-array-like'*/);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

});