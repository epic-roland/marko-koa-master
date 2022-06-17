$_mod.def("/core-js$3.23.1/internals/function-name", function(require, exports, module, __filename, __dirname) { var DESCRIPTORS = require('/core-js$3.23.1/internals/descriptors'/*'../internals/descriptors'*/);
var hasOwn = require('/core-js$3.23.1/internals/has-own-property'/*'../internals/has-own-property'*/);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

});