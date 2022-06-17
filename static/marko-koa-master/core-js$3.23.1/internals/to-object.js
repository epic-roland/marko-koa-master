$_mod.def("/core-js$3.23.1/internals/to-object", function(require, exports, module, __filename, __dirname) { var requireObjectCoercible = require('/core-js$3.23.1/internals/require-object-coercible'/*'../internals/require-object-coercible'*/);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};

});