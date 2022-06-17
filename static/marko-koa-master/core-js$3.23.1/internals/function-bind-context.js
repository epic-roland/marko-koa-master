$_mod.def("/core-js$3.23.1/internals/function-bind-context", function(require, exports, module, __filename, __dirname) { var uncurryThis = require('/core-js$3.23.1/internals/function-uncurry-this'/*'../internals/function-uncurry-this'*/);
var aCallable = require('/core-js$3.23.1/internals/a-callable'/*'../internals/a-callable'*/);
var NATIVE_BIND = require('/core-js$3.23.1/internals/function-bind-native'/*'../internals/function-bind-native'*/);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

});