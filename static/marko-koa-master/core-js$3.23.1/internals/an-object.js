$_mod.def("/core-js$3.23.1/internals/an-object", function(require, exports, module, __filename, __dirname) { var isObject = require('/core-js$3.23.1/internals/is-object'/*'../internals/is-object'*/);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};

});