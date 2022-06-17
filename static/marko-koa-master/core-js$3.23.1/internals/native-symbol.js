$_mod.def("/core-js$3.23.1/internals/native-symbol", function(require, exports, module, __filename, __dirname) { /* eslint-disable es-x/no-symbol -- required for testing */
var V8_VERSION = require('/core-js$3.23.1/internals/engine-v8-version'/*'../internals/engine-v8-version'*/);
var fails = require('/core-js$3.23.1/internals/fails'/*'../internals/fails'*/);

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

});