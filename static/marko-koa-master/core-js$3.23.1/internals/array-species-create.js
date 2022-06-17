$_mod.def("/core-js$3.23.1/internals/array-species-create", function(require, exports, module, __filename, __dirname) { var arraySpeciesConstructor = require('/core-js$3.23.1/internals/array-species-constructor'/*'../internals/array-species-constructor'*/);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

});