$_mod.def("/core-js$3.23.1/internals/has-own-property", function(require, exports, module, __filename, __dirname) { var uncurryThis = require('/core-js$3.23.1/internals/function-uncurry-this'/*'../internals/function-uncurry-this'*/);
var toObject = require('/core-js$3.23.1/internals/to-object'/*'../internals/to-object'*/);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};

});