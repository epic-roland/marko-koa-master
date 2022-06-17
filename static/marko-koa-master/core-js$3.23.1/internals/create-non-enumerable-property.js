$_mod.def("/core-js$3.23.1/internals/create-non-enumerable-property", function(require, exports, module, __filename, __dirname) { var DESCRIPTORS = require('/core-js$3.23.1/internals/descriptors'/*'../internals/descriptors'*/);
var definePropertyModule = require('/core-js$3.23.1/internals/object-define-property'/*'../internals/object-define-property'*/);
var createPropertyDescriptor = require('/core-js$3.23.1/internals/create-property-descriptor'/*'../internals/create-property-descriptor'*/);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

});