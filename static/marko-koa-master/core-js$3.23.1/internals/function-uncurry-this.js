$_mod.def("/core-js$3.23.1/internals/function-uncurry-this", function(require, exports, module, __filename, __dirname) { var NATIVE_BIND = require('/core-js$3.23.1/internals/function-bind-native'/*'../internals/function-bind-native'*/);

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};

});