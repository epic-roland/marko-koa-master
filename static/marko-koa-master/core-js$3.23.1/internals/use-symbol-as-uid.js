$_mod.def("/core-js$3.23.1/internals/use-symbol-as-uid", function(require, exports, module, __filename, __dirname) { /* eslint-disable es-x/no-symbol -- required for testing */
var NATIVE_SYMBOL = require('/core-js$3.23.1/internals/native-symbol'/*'../internals/native-symbol'*/);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

});