$_mod.def("/core-js$3.23.1/internals/fails", function(require, exports, module, __filename, __dirname) { module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

});