$_mod.def("/core-js$3.23.1/internals/shared-key", function(require, exports, module, __filename, __dirname) { var shared = require('/core-js$3.23.1/internals/shared'/*'../internals/shared'*/);
var uid = require('/core-js$3.23.1/internals/uid'/*'../internals/uid'*/);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

});