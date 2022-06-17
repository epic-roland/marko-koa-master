$_mod.def("/core-js$3.23.1/internals/require-object-coercible", function(require, exports, module, __filename, __dirname) { var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw $TypeError("Can't call method on " + it);
  return it;
};

});