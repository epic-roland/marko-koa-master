$_mod.def("/core-js$3.23.1/internals/ie8-dom-define", function(require, exports, module, __filename, __dirname) { var DESCRIPTORS = require('/core-js$3.23.1/internals/descriptors'/*'../internals/descriptors'*/);
var fails = require('/core-js$3.23.1/internals/fails'/*'../internals/fails'*/);
var createElement = require('/core-js$3.23.1/internals/document-create-element'/*'../internals/document-create-element'*/);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

});