// Compiled using marko@4.24.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mtn$1.0.0/components/dynamic-component/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    C1 = require("../component-1"),
    C2 = require("../component-2"),
    C3 = require("../component-3"),
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag");

function render(input, out, __component, component, state) {
  var data = input;

  const componentMap = {
    "1": C1,
    "2": C2,
    "3": C3
}

  marko_dynamicTag(out, componentMap[input.template], null, null, null, null, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/mtn$1.0.0/components/dynamic-component/index.marko",
    tags: [
      "../component-1",
      "../component-2",
      "../component-3"
    ]
  };
