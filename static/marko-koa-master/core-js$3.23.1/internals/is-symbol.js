$_mod.def("/core-js$3.23.1/internals/is-symbol", function(require, exports, module, __filename, __dirname) { var getBuiltIn = require('/core-js$3.23.1/internals/get-built-in'/*'../internals/get-built-in'*/);
var isCallable = require('/core-js$3.23.1/internals/is-callable'/*'../internals/is-callable'*/);
var isPrototypeOf = require('/core-js$3.23.1/internals/object-is-prototype-of'/*'../internals/object-is-prototype-of'*/);
var USE_SYMBOL_AS_UID = require('/core-js$3.23.1/internals/use-symbol-as-uid'/*'../internals/use-symbol-as-uid'*/);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

});