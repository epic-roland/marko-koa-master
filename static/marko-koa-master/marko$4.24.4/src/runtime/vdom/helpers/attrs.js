$_mod.def("/marko$4.24.4/src/runtime/vdom/helpers/attrs", function(require, exports, module, __filename, __dirname) { "use strict";

var complain = "MARKO_DEBUG" && require('/complain$1.6.0/index'/*"complain"*/);
var classHelper = require('/marko$4.24.4/src/runtime/helpers/class-value'/*"../../helpers/class-value"*/);
var styleHelper = require('/marko$4.24.4/src/runtime/helpers/style-value'/*"../../helpers/style-value"*/);
var parseHTML = require('/marko$4.24.4/src/runtime/vdom/parse-html'/*"../parse-html"*/);

/**
 * Helper for processing dynamic attributes
 */
module.exports = function(attributes) {
  if (typeof attributes === "string") {
    // eslint-disable-next-line no-constant-condition
    if ("MARKO_DEBUG") {
      complain(
        "Passing a string as a dynamic attribute value is deprecated - More details: https://github.com/marko-js/marko/wiki/Deprecation:-String-as-dynamic-attribute-value"
      );
    }
    return parseAttrs(attributes);
  }

  if (attributes) {
    var newAttributes = {};

    for (var attrName in attributes) {
      var val = attributes[attrName];
      if (attrName === "renderBody") {
        continue;
      }

      if (attrName === "class") {
        val = classHelper(val);
      } else if (attrName === "style") {
        val = styleHelper(val);
      }

      newAttributes[attrName] = val;
    }

    return newAttributes;
  }

  return attributes;
};

function parseAttrs(str) {
  if (str === "") {
    return {};
  }

  var attrs = parseHTML("<a " + str + ">").attributes;
  var result = {};
  var attr;

  for (var len = attrs.length, i = 0; i < len; i++) {
    attr = attrs[i];
    result[attr.name] = attr.value;
  }

  return result;
}

});