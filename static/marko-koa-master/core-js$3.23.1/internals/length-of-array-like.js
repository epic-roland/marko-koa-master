$_mod.def("/core-js$3.23.1/internals/length-of-array-like", function(require, exports, module, __filename, __dirname) { var toLength = require('/core-js$3.23.1/internals/to-length'/*'../internals/to-length'*/);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};

});