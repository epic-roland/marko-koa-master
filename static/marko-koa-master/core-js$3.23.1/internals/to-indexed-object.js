$_mod.def("/core-js$3.23.1/internals/to-indexed-object", function(require, exports, module, __filename, __dirname) { // toObject with fallback for non-array-like ES3 strings
var IndexedObject = require('/core-js$3.23.1/internals/indexed-object'/*'../internals/indexed-object'*/);
var requireObjectCoercible = require('/core-js$3.23.1/internals/require-object-coercible'/*'../internals/require-object-coercible'*/);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

});