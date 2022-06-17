$_mod.def("/core-js$3.23.1/internals/create-property-descriptor", function(require, exports, module, __filename, __dirname) { module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

});