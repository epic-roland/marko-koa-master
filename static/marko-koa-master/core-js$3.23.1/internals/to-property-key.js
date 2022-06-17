$_mod.def("/core-js$3.23.1/internals/to-property-key", function(require, exports, module, __filename, __dirname) { var toPrimitive = require('/core-js$3.23.1/internals/to-primitive'/*'../internals/to-primitive'*/);
var isSymbol = require('/core-js$3.23.1/internals/is-symbol'/*'../internals/is-symbol'*/);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

});