$_mod.def("/core-js$3.23.1/internals/to-length", function(require, exports, module, __filename, __dirname) { var toIntegerOrInfinity = require('/core-js$3.23.1/internals/to-integer-or-infinity'/*'../internals/to-integer-or-infinity'*/);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

});