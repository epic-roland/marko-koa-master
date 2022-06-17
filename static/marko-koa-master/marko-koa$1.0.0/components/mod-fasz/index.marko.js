$_mod.def("/marko-koa$1.0.0/components/mod-fasz/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.24.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.24.4/src/vdom'/*"marko/src/vdom"*/).t(),
    marko_component = {
        onCreate: function() {
          console.log("modfasz oncreate");
        },
        onMount: function() {
          console.log("modfasz Mounted in the browser!");
        }
      },
    components_registry_browser = require('/marko$4.24.4/src/runtime/components/registry-browser'/*"marko/src/runtime/components/registry-browser"*/),
    marko_registerComponent = components_registry_browser.r,
    marko_componentType = marko_registerComponent("/marko-koa$1.0.0/components/mod-fasz/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = require('/marko$4.24.4/src/runtime/components/renderer'/*"marko/src/runtime/components/renderer"*/),
    marko_defineComponent = require('/marko$4.24.4/src/runtime/components/defineComponent'/*"marko/src/runtime/components/defineComponent"*/),
    marko_createElement = require('/marko$4.24.4/src/runtime/vdom/helpers/v-element'/*"marko/src/runtime/vdom/helpers/v-element"*/),
    marko_const = require('/marko$4.24.4/src/runtime/vdom/helpers/const'/*"marko/src/runtime/vdom/helpers/const"*/),
    marko_const_nextId = marko_const("fa0232"),
    marko_node0 = marko_createElement("h1", null, "0", null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("FASSZ");

function render(input, out, __component, component, state) {
  var data = input;

  out.n(marko_node0, component);
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});