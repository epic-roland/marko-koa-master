$_mod.def("/core-js$3.23.1/internals/classof", function(require, exports, module, __filename, __dirname) { var TO_STRING_TAG_SUPPORT = require('/core-js$3.23.1/internals/to-string-tag-support'/*'../internals/to-string-tag-support'*/);
var isCallable = require('/core-js$3.23.1/internals/is-callable'/*'../internals/is-callable'*/);
var classofRaw = require('/core-js$3.23.1/internals/classof-raw'/*'../internals/classof-raw'*/);
var wellKnownSymbol = require('/core-js$3.23.1/internals/well-known-symbol'/*'../internals/well-known-symbol'*/);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

});