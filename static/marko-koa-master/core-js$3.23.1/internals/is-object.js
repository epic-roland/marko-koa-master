$_mod.def("/core-js$3.23.1/internals/is-object", function(require, exports, module, __filename, __dirname) { var isCallable = require('/core-js$3.23.1/internals/is-callable'/*'../internals/is-callable'*/);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};

});