$_mod.def("/core-js$3.23.1/internals/is-array", function(require, exports, module, __filename, __dirname) { var classof = require('/core-js$3.23.1/internals/classof-raw'/*'../internals/classof-raw'*/);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es-x/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};

});