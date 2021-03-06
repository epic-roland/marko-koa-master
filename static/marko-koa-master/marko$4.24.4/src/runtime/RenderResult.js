$_mod.def("/marko$4.24.4/src/runtime/RenderResult", function(require, exports, module, __filename, __dirname) { var domInsert = require('/marko$4.24.4/src/runtime/dom-insert'/*"./dom-insert"*/);
var complain = "MARKO_DEBUG" && require('/complain$1.6.0/index'/*"complain"*/);

function getComponentDefs(result) {
  var componentDefs = result.___components;

  if (!componentDefs) {
    throw Error("No component");
  }
  return componentDefs;
}

function RenderResult(out) {
  this.out = this.___out = out;
  this.___components = undefined;
}

module.exports = RenderResult;

var proto = (RenderResult.prototype = {
  getComponent: function() {
    return this.getComponents()[0];
  },
  getComponents: function(selector) {
    if (this.___components === undefined) {
      throw Error("Not added to DOM");
    }

    var componentDefs = getComponentDefs(this);

    var components = [];

    componentDefs.forEach(function(componentDef) {
      var component = componentDef.___component;
      if (!selector || selector(component)) {
        components.push(component);
      }
    });

    return components;
  },

  afterInsert: function(doc) {
    var out = this.___out;
    var componentsContext = out.___components;
    if (componentsContext) {
      this.___components = componentsContext.___initComponents(doc);
    } else {
      this.___components = null;
    }

    return this;
  },
  getNode: function(doc) {
    return this.___out.___getNode(doc);
  },
  getOutput: function() {
    return this.___out.___getOutput();
  },
  toString: function() {
    return this.___out.toString();
  },
  document: typeof document != "undefined" && document
});

Object.defineProperty(proto, "html", {
  get: function() {
    // eslint-disable-next-line no-constant-condition
    if ("MARKO_DEBUG") {
      complain(
        'The "html" property is deprecated. Please use "toString" instead.'
      );
    }
    return this.toString();
  }
});

Object.defineProperty(proto, "context", {
  get: function() {
    // eslint-disable-next-line no-constant-condition
    if ("MARKO_DEBUG") {
      complain(
        'The "context" property is deprecated. Please use "out" instead.'
      );
    }
    return this.___out;
  }
});

// Add all of the following DOM methods to Component.prototype:
// - appendTo(referenceEl)
// - replace(referenceEl)
// - replaceChildrenOf(referenceEl)
// - insertBefore(referenceEl)
// - insertAfter(referenceEl)
// - prependTo(referenceEl)
domInsert(
  proto,
  function getEl(renderResult, referenceEl) {
    return renderResult.getNode(referenceEl.ownerDocument);
  },
  function afterInsert(renderResult, referenceEl) {
    var isShadow =
      typeof ShadowRoot === "function" && referenceEl instanceof ShadowRoot;
    return renderResult.afterInsert(
      isShadow ? referenceEl : referenceEl.ownerDocument
    );
  }
);

});