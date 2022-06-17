$_mod.def("/core-js$3.23.1/internals/create-property", function(require, exports, module, __filename, __dirname) { 'use strict';
var toPropertyKey = require('/core-js$3.23.1/internals/to-property-key'/*'../internals/to-property-key'*/);
var definePropertyModule = require('/core-js$3.23.1/internals/object-define-property'/*'../internals/object-define-property'*/);
var createPropertyDescriptor = require('/core-js$3.23.1/internals/create-property-descriptor'/*'../internals/create-property-descriptor'*/);

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

});