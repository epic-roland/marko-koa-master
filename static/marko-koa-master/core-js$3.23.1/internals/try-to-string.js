$_mod.def("/core-js$3.23.1/internals/try-to-string", function(require, exports, module, __filename, __dirname) { var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};

});