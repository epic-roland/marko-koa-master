$_mod.def("/core-js$3.23.1/internals/well-known-symbol", function(require, exports, module, __filename, __dirname) { var global = require('/core-js$3.23.1/internals/global'/*'../internals/global'*/);
var shared = require('/core-js$3.23.1/internals/shared'/*'../internals/shared'*/);
var hasOwn = require('/core-js$3.23.1/internals/has-own-property'/*'../internals/has-own-property'*/);
var uid = require('/core-js$3.23.1/internals/uid'/*'../internals/uid'*/);
var NATIVE_SYMBOL = require('/core-js$3.23.1/internals/native-symbol'/*'../internals/native-symbol'*/);
var USE_SYMBOL_AS_UID = require('/core-js$3.23.1/internals/use-symbol-as-uid'/*'../internals/use-symbol-as-uid'*/);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};

});