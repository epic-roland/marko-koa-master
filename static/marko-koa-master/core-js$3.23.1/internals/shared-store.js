$_mod.def("/core-js$3.23.1/internals/shared-store", function(require, exports, module, __filename, __dirname) { var global = require('/core-js$3.23.1/internals/global'/*'../internals/global'*/);
var defineGlobalProperty = require('/core-js$3.23.1/internals/define-global-property'/*'../internals/define-global-property'*/);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;

});