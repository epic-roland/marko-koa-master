$_mod.def("/core-js$3.23.1/internals/array-method-has-species-support", function(require, exports, module, __filename, __dirname) { var fails = require('/core-js$3.23.1/internals/fails'/*'../internals/fails'*/);
var wellKnownSymbol = require('/core-js$3.23.1/internals/well-known-symbol'/*'../internals/well-known-symbol'*/);
var V8_VERSION = require('/core-js$3.23.1/internals/engine-v8-version'/*'../internals/engine-v8-version'*/);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

});