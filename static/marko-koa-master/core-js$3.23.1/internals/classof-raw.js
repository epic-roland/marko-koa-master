$_mod.def("/core-js$3.23.1/internals/classof-raw", function(require, exports, module, __filename, __dirname) { var uncurryThis = require('/core-js$3.23.1/internals/function-uncurry-this'/*'../internals/function-uncurry-this'*/);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};

});