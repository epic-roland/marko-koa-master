$_mod.def("/core-js$3.23.1/internals/get-method", function(require, exports, module, __filename, __dirname) { var aCallable = require('/core-js$3.23.1/internals/a-callable'/*'../internals/a-callable'*/);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};

});