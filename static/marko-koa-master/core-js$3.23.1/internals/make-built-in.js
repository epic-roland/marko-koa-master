$_mod.def("/core-js$3.23.1/internals/make-built-in", function(require, exports, module, __filename, __dirname) { var fails = require('/core-js$3.23.1/internals/fails'/*'../internals/fails'*/);
var isCallable = require('/core-js$3.23.1/internals/is-callable'/*'../internals/is-callable'*/);
var hasOwn = require('/core-js$3.23.1/internals/has-own-property'/*'../internals/has-own-property'*/);
var DESCRIPTORS = require('/core-js$3.23.1/internals/descriptors'/*'../internals/descriptors'*/);
var CONFIGURABLE_FUNCTION_NAME = require('/core-js$3.23.1/internals/function-name'/*'../internals/function-name'*/).CONFIGURABLE;
var inspectSource = require('/core-js$3.23.1/internals/inspect-source'/*'../internals/inspect-source'*/);
var InternalStateModule = require('/core-js$3.23.1/internals/internal-state'/*'../internals/internal-state'*/);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    defineProperty(value, 'name', { value: name, configurable: true });
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');

});