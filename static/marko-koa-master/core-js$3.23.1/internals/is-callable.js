$_mod.def("/core-js$3.23.1/internals/is-callable", function(require, exports, module, __filename, __dirname) { // `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};

});