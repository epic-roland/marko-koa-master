$_mod.def("/core-js$3.23.1/internals/is-forced", function(require, exports, module, __filename, __dirname) { var fails = require('/core-js$3.23.1/internals/fails'/*'../internals/fails'*/);
var isCallable = require('/core-js$3.23.1/internals/is-callable'/*'../internals/is-callable'*/);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;

});