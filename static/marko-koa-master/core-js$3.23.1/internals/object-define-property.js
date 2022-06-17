$_mod.def("/core-js$3.23.1/internals/object-define-property", function(require, exports, module, __filename, __dirname) { var DESCRIPTORS = require('/core-js$3.23.1/internals/descriptors'/*'../internals/descriptors'*/);
var IE8_DOM_DEFINE = require('/core-js$3.23.1/internals/ie8-dom-define'/*'../internals/ie8-dom-define'*/);
var V8_PROTOTYPE_DEFINE_BUG = require('/core-js$3.23.1/internals/v8-prototype-define-bug'/*'../internals/v8-prototype-define-bug'*/);
var anObject = require('/core-js$3.23.1/internals/an-object'/*'../internals/an-object'*/);
var toPropertyKey = require('/core-js$3.23.1/internals/to-property-key'/*'../internals/to-property-key'*/);

var $TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

});