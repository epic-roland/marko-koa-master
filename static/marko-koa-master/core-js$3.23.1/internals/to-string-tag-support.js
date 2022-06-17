$_mod.def("/core-js$3.23.1/internals/to-string-tag-support", function(require, exports, module, __filename, __dirname) { var wellKnownSymbol = require('/core-js$3.23.1/internals/well-known-symbol'/*'../internals/well-known-symbol'*/);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';

});