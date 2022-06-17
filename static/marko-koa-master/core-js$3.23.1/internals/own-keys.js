$_mod.def("/core-js$3.23.1/internals/own-keys", function(require, exports, module, __filename, __dirname) { var getBuiltIn = require('/core-js$3.23.1/internals/get-built-in'/*'../internals/get-built-in'*/);
var uncurryThis = require('/core-js$3.23.1/internals/function-uncurry-this'/*'../internals/function-uncurry-this'*/);
var getOwnPropertyNamesModule = require('/core-js$3.23.1/internals/object-get-own-property-names'/*'../internals/object-get-own-property-names'*/);
var getOwnPropertySymbolsModule = require('/core-js$3.23.1/internals/object-get-own-property-symbols'/*'../internals/object-get-own-property-symbols'*/);
var anObject = require('/core-js$3.23.1/internals/an-object'/*'../internals/an-object'*/);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

});