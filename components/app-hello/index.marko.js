// Compiled using marko@4.24.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mtn$1.0.0/components/app-hello/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_dataMarko = require("marko/src/runtime/html/helpers/data-marko"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    dynamic_component2_template = require("../dynamic-component2"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    dynamic_component2_tag = marko_loadTag(dynamic_component2_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><p>Hello " +
    marko_escapeXml(data.name) +
    "</p><button" +
    marko_dataMarko(out, __component, {
      onclick: __component.d("click", "sendEmail", false)
    }) +
    " type=button>Show map</button>");

  var $for$0 = 0;

  marko_forOf(input.templates, function(template) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    dynamic_component2_tag({
        template: template
      }, out, __component, "3" + $keyScope$0);
  });

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/mtn$1.0.0/components/app-hello/index.marko",
    tags: [
      "../dynamic-component2"
    ]
  };
