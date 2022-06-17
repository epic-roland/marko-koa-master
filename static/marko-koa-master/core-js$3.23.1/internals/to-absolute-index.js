$_mod.def("/core-js$3.23.1/internals/to-absolute-index", function(require, exports, module, __filename, __dirname) { var toIntegerOrInfinity = require('/core-js$3.23.1/internals/to-integer-or-infinity'/*'../internals/to-integer-or-infinity'*/);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

});