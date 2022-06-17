$_mod.def("/core-js$3.23.1/internals/to-primitive", function(require, exports, module, __filename, __dirname) { var call = require('/core-js$3.23.1/internals/function-call'/*'../internals/function-call'*/);
var isObject = require('/core-js$3.23.1/internals/is-object'/*'../internals/is-object'*/);
var isSymbol = require('/core-js$3.23.1/internals/is-symbol'/*'../internals/is-symbol'*/);
var getMethod = require('/core-js$3.23.1/internals/get-method'/*'../internals/get-method'*/);
var ordinaryToPrimitive = require('/core-js$3.23.1/internals/ordinary-to-primitive'/*'../internals/ordinary-to-primitive'*/);
var wellKnownSymbol = require('/core-js$3.23.1/internals/well-known-symbol'/*'../internals/well-known-symbol'*/);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

});