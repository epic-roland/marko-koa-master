// Compiled using marko@4.24.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mtn$1.0.0/components/dynamic-component2/index.marko",
    marko_component = require("./component"),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag");

function render(input, out, __component, component, state) {
  var data = input;

  if (state.err) {
    out.w("Whoops: " +
      marko_escapeXml(state.err));
  } else {
    marko_dynamicTag(out, state.template, null, null, null, null, __component, "0");
  }
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/mtn$1.0.0/components/dynamic-component2/index.marko",
    component: "./"
  };
