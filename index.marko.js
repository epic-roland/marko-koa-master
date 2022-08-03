// Compiled using marko@4.24.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mtn$1.0.0/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    lasso_page_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/config-tag")),
    lasso_head_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/head-tag")),
    app_hello_template = require("./components/app-hello"),
    app_hello_tag = marko_loadTag(app_hello_template),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_styleAttr = require("marko/src/runtime/html/helpers/style-attr"),
    lasso_body_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/body-tag")),
    browser_refresh_tag = marko_loadTag(require("browser-refresh-taglib/refresh-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  lasso_page_tag({
      dirname: __dirname,
      filename: __filename
    }, out, __component, "0");

  out.w("<!doctype html><html lang=en><head><meta charset=UTF-8><title>marko-koa</title>");

  lasso_head_tag({}, out, __component, "5");

  lasso_head_tag({}, out, __component, "6");

  out.w("</head><body>");

  app_hello_tag({
      name: input.name
    }, out, __component, "8");

  out.w("<p>You have " +
    marko_escapeXml(input.count) +
    " messages</p>");

  if (input.colors.length) {
    out.w("<ul>");

    var $for$0 = 0;

    marko_forOf(data.colors, function(color) {
      var $keyScope$0 = "[" + (($for$0++) + "]");

      out.w("<li" +
        marko_styleAttr("color: " + (color == null ? "" : color)) +
        ">" +
        marko_escapeXml(color) +
        "</li>");
    });

    out.w("</ul>");
  }

  lasso_body_tag({}, out, __component, "12");

  browser_refresh_tag({}, out, __component, "13");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "14");

  _preferred_script_location_tag({}, out);

  lasso_body_tag({}, out, __component, "15");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/mtn$1.0.0/index.marko",
    tags: [
      "@lasso/marko-taglib/taglib/config-tag",
      "@lasso/marko-taglib/taglib/head-tag",
      "./components/app-hello",
      "@lasso/marko-taglib/taglib/body-tag",
      "browser-refresh-taglib/refresh-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
