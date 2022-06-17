$_mod.def("/core-js$3.23.1/modules/es.array.map", function(require, exports, module, __filename, __dirname) { 'use strict';
var $ = require('/core-js$3.23.1/internals/export'/*'../internals/export'*/);
var $map = require('/core-js$3.23.1/internals/array-iteration'/*'../internals/array-iteration'*/).map;
var arrayMethodHasSpeciesSupport = require('/core-js$3.23.1/internals/array-method-has-species-support'/*'../internals/array-method-has-species-support'*/);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

});