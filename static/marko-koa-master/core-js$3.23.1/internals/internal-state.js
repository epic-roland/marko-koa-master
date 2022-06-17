$_mod.def("/core-js$3.23.1/internals/internal-state", function(require, exports, module, __filename, __dirname) { var NATIVE_WEAK_MAP = require('/core-js$3.23.1/internals/native-weak-map'/*'../internals/native-weak-map'*/);
var global = require('/core-js$3.23.1/internals/global'/*'../internals/global'*/);
var uncurryThis = require('/core-js$3.23.1/internals/function-uncurry-this'/*'../internals/function-uncurry-this'*/);
var isObject = require('/core-js$3.23.1/internals/is-object'/*'../internals/is-object'*/);
var createNonEnumerableProperty = require('/core-js$3.23.1/internals/create-non-enumerable-property'/*'../internals/create-non-enumerable-property'*/);
var hasOwn = require('/core-js$3.23.1/internals/has-own-property'/*'../internals/has-own-property'*/);
var shared = require('/core-js$3.23.1/internals/shared-store'/*'../internals/shared-store'*/);
var sharedKey = require('/core-js$3.23.1/internals/shared-key'/*'../internals/shared-key'*/);
var hiddenKeys = require('/core-js$3.23.1/internals/hidden-keys'/*'../internals/hidden-keys'*/);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

});