$_mod.def("/marko$4.24.4/src/runtime/components/ComponentsContext", function(require, exports, module, __filename, __dirname) { "use strict";
var GlobalComponentsContext = require('/marko$4.24.4/src/runtime/components/GlobalComponentsContext'/*"./GlobalComponentsContext"*/);

function ComponentsContext(out, parentComponentsContext) {
  var globalComponentsContext;
  var componentDef;

  if (parentComponentsContext) {
    globalComponentsContext = parentComponentsContext.___globalContext;
    componentDef = parentComponentsContext.___componentDef;

    var nestedContextsForParent;
    if (
      !(nestedContextsForParent = parentComponentsContext.___nestedContexts)
    ) {
      nestedContextsForParent = parentComponentsContext.___nestedContexts = [];
    }

    nestedContextsForParent.push(this);
  } else {
    globalComponentsContext = out.global.___components;
    if (globalComponentsContext === undefined) {
      out.global.___components = globalComponentsContext = new GlobalComponentsContext(
        out
      );
    }
  }

  this.___globalContext = globalComponentsContext;
  this.___components = [];
  this.___out = out;
  this.___componentDef = componentDef;
  this.___nestedContexts = undefined;
  this.___isPreserved =
    parentComponentsContext && parentComponentsContext.___isPreserved;
}

ComponentsContext.prototype = {
  ___initComponents: function(doc) {
    var componentDefs = this.___components;

    ComponentsContext.___initClientRendered(componentDefs, doc);

    this.___out.emit("___componentsInitialized");

    // Reset things stored in global since global is retained for
    // future renders
    this.___out.global.___components = undefined;

    return componentDefs;
  }
};

function getComponentsContext(out) {
  return out.___components || (out.___components = new ComponentsContext(out));
}

module.exports = exports = ComponentsContext;

exports.___getComponentsContext = getComponentsContext;

});