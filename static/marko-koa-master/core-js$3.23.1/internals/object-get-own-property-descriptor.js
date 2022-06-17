$_mod.def("/core-js$3.23.1/internals/object-get-own-property-descriptor", function(require, exports, module, __filename, __dirname) { var DESCRIPTORS = require('/core-js$3.23.1/internals/descriptors'/*'../internals/descriptors'*/);
var call = require('/core-js$3.23.1/internals/function-call'/*'../internals/function-call'*/);
var propertyIsEnumerableModule = require('/core-js$3.23.1/internals/object-property-is-enumerable'/*'../internals/object-property-is-enumerable'*/);
var createPropertyDescriptor = require('/core-js$3.23.1/internals/create-property-descriptor'/*'../internals/create-property-descriptor'*/);
var toIndexedObject = require('/core-js$3.23.1/internals/to-indexed-object'/*'../internals/to-indexed-object'*/);
var toPropertyKey = require('/core-js$3.23.1/internals/to-property-key'/*'../internals/to-property-key'*/);
var hasOwn = require('/core-js$3.23.1/internals/has-own-property'/*'../internals/has-own-property'*/);
var IE8_DOM_DEFINE = require('/core-js$3.23.1/internals/ie8-dom-define'/*'../internals/ie8-dom-define'*/);

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

});