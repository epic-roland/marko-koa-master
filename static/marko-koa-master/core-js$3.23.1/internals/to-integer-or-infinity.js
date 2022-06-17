$_mod.def("/core-js$3.23.1/internals/to-integer-or-infinity", function(require, exports, module, __filename, __dirname) { var trunc = require('/core-js$3.23.1/internals/math-trunc'/*'../internals/math-trunc'*/);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

});