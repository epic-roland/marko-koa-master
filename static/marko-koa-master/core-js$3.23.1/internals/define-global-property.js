$_mod.def("/core-js$3.23.1/internals/define-global-property", function(require, exports, module, __filename, __dirname) { var global = require('/core-js$3.23.1/internals/global'/*'../internals/global'*/);

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};

});