function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      lasso_page_tag = __loadTag(require("@lasso/marko-taglib/taglib/config-tag")),
      lasso_head_tag = __loadTag(require("@lasso/marko-taglib/taglib/head-tag")),
      app_hello_tag = __loadTag(require("./components/app-hello")),
      forEach = __helpers.f,
      escapeXmlAttr = __helpers.xa,
      lasso_body_tag = __loadTag(require("@lasso/marko-taglib/taglib/body-tag")),
      init_widgets_tag = __loadTag(require("marko-widgets/taglib/init-widgets-tag"));

  return function render(data, out) {
    lasso_page_tag({
        dirname: __dirname,
        filename: __filename
      }, out);

    out.w("<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>marko-koa</title>");

    lasso_head_tag({}, out);

    lasso_head_tag({}, out);

    out.w("</head><body>");

    app_hello_tag({
        name: input.name
      }, out);

    out.w("<p>You have " +
      escapeXml(input.count) +
      " messages</p>");

    if (input.colors.length) {
      out.w("<ul>");

      forEach(data.colors, function(color) {
        out.w("<li style=\"color: " +
          escapeXmlAttr(color) +
          "\">" +
          escapeXml(color) +
          "</li>");
      });

      out.w("</ul>");
    }

    lasso_body_tag({}, out);

    init_widgets_tag({
        immediate: true
      }, out);

    out.w("<browser-refresh></browser-refresh>");

    lasso_body_tag({}, out);

    out.w("</body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
