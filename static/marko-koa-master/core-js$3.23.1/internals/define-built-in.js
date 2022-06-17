$_mod.def("/core-js$3.23.1/internals/define-built-in", function(require, exports, module, __filename, __dirname) { var isCallable = require('/core-js$3.23.1/internals/is-callable'/*'../internals/is-callable'*/);
var definePropertyModule = require('/core-js$3.23.1/internals/object-define-property'/*'../internals/object-define-property'*/);
var makeBuiltIn = require('/core-js$3.23.1/internals/make-built-in'/*'../internals/make-built-in'*/);
var defineGlobalProperty = require('/core-js$3.23.1/internals/define-global-property'/*'../internals/define-global-property'*/);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    if (!options.unsafe) delete O[key];
    else if (O[key]) simple = true;
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

});