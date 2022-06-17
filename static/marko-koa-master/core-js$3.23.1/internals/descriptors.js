$_mod.def("/core-js$3.23.1/internals/descriptors", function(require, exports, module, __filename, __dirname) { var fails = require('/core-js$3.23.1/internals/fails'/*'../internals/fails'*/);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

});