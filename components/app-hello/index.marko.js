// Compiled using marko@4.24.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mtn$1.0.0/components/app-hello/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_dataMarko = require("marko/src/runtime/html/helpers/data-marko");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><p>Hello " +
    marko_escapeXml(data.name) +
    "</p><button" +
    marko_dataMarko(out, __component, {
      onclick: __component.d("click", "sendEmail", false)
    }) +
    " type=button>Show map</button></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/mtn$1.0.0/components/app-hello/index.marko"
  };
