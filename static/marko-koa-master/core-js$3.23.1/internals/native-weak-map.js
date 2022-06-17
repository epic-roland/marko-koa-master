$_mod.def("/core-js$3.23.1/internals/native-weak-map", function(require, exports, module, __filename, __dirname) { var global = require('/core-js$3.23.1/internals/global'/*'../internals/global'*/);
var isCallable = require('/core-js$3.23.1/internals/is-callable'/*'../internals/is-callable'*/);
var inspectSource = require('/core-js$3.23.1/internals/inspect-source'/*'../internals/inspect-source'*/);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));

});