$_mod.def("/core-js$3.23.1/internals/a-callable", function(require, exports, module, __filename, __dirname) { var isCallable = require('/core-js$3.23.1/internals/is-callable'/*'../internals/is-callable'*/);
var tryToString = require('/core-js$3.23.1/internals/try-to-string'/*'../internals/try-to-string'*/);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};

});