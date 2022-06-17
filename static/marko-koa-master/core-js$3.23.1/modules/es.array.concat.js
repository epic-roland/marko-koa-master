$_mod.def("/core-js$3.23.1/modules/es.array.concat", function(require, exports, module, __filename, __dirname) { 'use strict';
var $ = require('/core-js$3.23.1/internals/export'/*'../internals/export'*/);
var fails = require('/core-js$3.23.1/internals/fails'/*'../internals/fails'*/);
var isArray = require('/core-js$3.23.1/internals/is-array'/*'../internals/is-array'*/);
var isObject = require('/core-js$3.23.1/internals/is-object'/*'../internals/is-object'*/);
var toObject = require('/core-js$3.23.1/internals/to-object'/*'../internals/to-object'*/);
var lengthOfArrayLike = require('/core-js$3.23.1/internals/length-of-array-like'/*'../internals/length-of-array-like'*/);
var doesNotExceedSafeInteger = require('/core-js$3.23.1/internals/does-not-exceed-safe-integer'/*'../internals/does-not-exceed-safe-integer'*/);
var createProperty = require('/core-js$3.23.1/internals/create-property'/*'../internals/create-property'*/);
var arraySpeciesCreate = require('/core-js$3.23.1/internals/array-species-create'/*'../internals/array-species-create'*/);
var arrayMethodHasSpeciesSupport = require('/core-js$3.23.1/internals/array-method-has-species-support'/*'../internals/array-method-has-species-support'*/);
var wellKnownSymbol = require('/core-js$3.23.1/internals/well-known-symbol'/*'../internals/well-known-symbol'*/);
var V8_VERSION = require('/core-js$3.23.1/internals/engine-v8-version'/*'../internals/engine-v8-version'*/);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

});