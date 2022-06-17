$_mod.def("/core-js$3.23.1/internals/function-call", function(require, exports, module, __filename, __dirname) { var NATIVE_BIND = require('/core-js$3.23.1/internals/function-bind-native'/*'../internals/function-bind-native'*/);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};

});