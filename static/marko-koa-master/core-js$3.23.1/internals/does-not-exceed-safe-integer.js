$_mod.def("/core-js$3.23.1/internals/does-not-exceed-safe-integer", function(require, exports, module, __filename, __dirname) { var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};

});