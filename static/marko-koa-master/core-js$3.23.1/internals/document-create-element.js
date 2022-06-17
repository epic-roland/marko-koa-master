$_mod.def("/core-js$3.23.1/internals/document-create-element", function(require, exports, module, __filename, __dirname) { var global = require('/core-js$3.23.1/internals/global'/*'../internals/global'*/);
var isObject = require('/core-js$3.23.1/internals/is-object'/*'../internals/is-object'*/);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

});