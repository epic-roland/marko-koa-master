$_mod.def("/core-js$3.23.1/internals/get-built-in", function(require, exports, module, __filename, __dirname) { var global = require('/core-js$3.23.1/internals/global'/*'../internals/global'*/);
var isCallable = require('/core-js$3.23.1/internals/is-callable'/*'../internals/is-callable'*/);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

});