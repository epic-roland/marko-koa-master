$_mod.def("/core-js$3.23.1/internals/uid", function(require, exports, module, __filename, __dirname) { var uncurryThis = require('/core-js$3.23.1/internals/function-uncurry-this'/*'../internals/function-uncurry-this'*/);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

});