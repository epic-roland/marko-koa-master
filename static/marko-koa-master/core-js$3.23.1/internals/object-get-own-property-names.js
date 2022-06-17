$_mod.def("/core-js$3.23.1/internals/object-get-own-property-names", function(require, exports, module, __filename, __dirname) { var internalObjectKeys = require('/core-js$3.23.1/internals/object-keys-internal'/*'../internals/object-keys-internal'*/);
var enumBugKeys = require('/core-js$3.23.1/internals/enum-bug-keys'/*'../internals/enum-bug-keys'*/);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

});