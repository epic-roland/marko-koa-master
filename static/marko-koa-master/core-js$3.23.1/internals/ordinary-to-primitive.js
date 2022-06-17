$_mod.def("/core-js$3.23.1/internals/ordinary-to-primitive", function(require, exports, module, __filename, __dirname) { var call = require('/core-js$3.23.1/internals/function-call'/*'../internals/function-call'*/);
var isCallable = require('/core-js$3.23.1/internals/is-callable'/*'../internals/is-callable'*/);
var isObject = require('/core-js$3.23.1/internals/is-object'/*'../internals/is-object'*/);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};

});