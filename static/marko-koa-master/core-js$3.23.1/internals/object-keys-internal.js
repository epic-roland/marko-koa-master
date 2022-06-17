$_mod.def("/core-js$3.23.1/internals/object-keys-internal", function(require, exports, module, __filename, __dirname) { var uncurryThis = require('/core-js$3.23.1/internals/function-uncurry-this'/*'../internals/function-uncurry-this'*/);
var hasOwn = require('/core-js$3.23.1/internals/has-own-property'/*'../internals/has-own-property'*/);
var toIndexedObject = require('/core-js$3.23.1/internals/to-indexed-object'/*'../internals/to-indexed-object'*/);
var indexOf = require('/core-js$3.23.1/internals/array-includes'/*'../internals/array-includes'*/).indexOf;
var hiddenKeys = require('/core-js$3.23.1/internals/hidden-keys'/*'../internals/hidden-keys'*/);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};

});