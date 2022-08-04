// Compiled using marko@4.24.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
    onCreate: function (input, out) {
        this.state = { importPromise: import('../component-' + input.template) };
    }
},
    marko_componentType = "/mtn$1.0.0/components/dynamic-component3/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    await_tag = marko_loadTag(require("marko/src/core-tags/core/await/renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  await_tag({
      _provider: state.importPromise,
      _name: "state.importPromise",
      then: {
          renderBody: function(out, tpl) {
            marko_dynamicTag(out, state.tpl, null, null, null, null, __component, "2");
          }
        },
      catch: {
          renderBody: function(out, err) {
            out.w(marko_escapeXml(err.name) +
              " error: " +
              marko_escapeXml(err.message));
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/mtn$1.0.0/components/dynamic-component3/index.marko",
    component: "./index.marko",
    tags: [
      "marko/src/core-tags/core/await/renderer"
    ]
  };
