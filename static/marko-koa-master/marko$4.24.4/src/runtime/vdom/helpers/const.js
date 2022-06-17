$_mod.def("/marko$4.24.4/src/runtime/vdom/helpers/const", function(require, exports, module, __filename, __dirname) { "use strict";

module.exports = function(id) {
  var i = 0;
  return function() {
    return id + i++;
  };
};

});