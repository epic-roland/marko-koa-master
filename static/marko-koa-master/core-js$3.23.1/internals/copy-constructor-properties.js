$_mod.def("/core-js$3.23.1/internals/copy-constructor-properties", function(require, exports, module, __filename, __dirname) { var hasOwn = require('/core-js$3.23.1/internals/has-own-property'/*'../internals/has-own-property'*/);
var ownKeys = require('/core-js$3.23.1/internals/own-keys'/*'../internals/own-keys'*/);
var getOwnPropertyDescriptorModule = require('/core-js$3.23.1/internals/object-get-own-property-descriptor'/*'../internals/object-get-own-property-descriptor'*/);
var definePropertyModule = require('/core-js$3.23.1/internals/object-define-property'/*'../internals/object-define-property'*/);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

});