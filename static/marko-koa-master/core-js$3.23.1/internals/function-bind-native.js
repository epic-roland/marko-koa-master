$_mod.def("/core-js$3.23.1/internals/function-bind-native", function(require, exports, module, __filename, __dirname) { var fails = require('/core-js$3.23.1/internals/fails'/*'../internals/fails'*/);

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

});