$_mod.def("/marko$4.24.4/src/runtime/vdom/parse-html", function(require, exports, module, __filename, __dirname) { var parseHTML = function(html) {
  var container = document.createElement("template");
  parseHTML = container.content
    ? function(html) {
        container.innerHTML = html;
        return container.content;
      }
    : function(html) {
        container.innerHTML = html;
        return container;
      };

  return parseHTML(html);
};

module.exports = function(html) {
  return parseHTML(html).firstChild;
};

});