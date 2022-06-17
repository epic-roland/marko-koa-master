$_mod.def("/core-js$3.23.1/internals/engine-user-agent", function(require, exports, module, __filename, __dirname) { var getBuiltIn = require('/core-js$3.23.1/internals/get-built-in'/*'../internals/get-built-in'*/);

module.exports = getBuiltIn('navigator', 'userAgent') || '';

});