function create(__helpers) {
  var __widgetType = {
          name: "/marko-koa$1.0.0/components/app-hello/index",
          def: function() {
            return require("./");
          }
        },
      __markoWidgets = require("marko-widgets"),
      __widgetAttrs = __markoWidgets.attrs,
      str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      w_widget_tag = __loadTag(require("marko-widgets/taglib/widget-tag")),
      attr = __helpers.a,
      attrs = __helpers.as;

  return function render(data, out) {
    w_widget_tag({
        type: __widgetType,
        _cfg: data.widgetConfig,
        _state: data.widgetState,
        _props: data.widgetProps,
        _body: data.widgetBody,
        renderBody: function renderBody(out, widget) {
          out.w("<div" +
            attr("id", widget.id) +
            attrs(__widgetAttrs(widget)) +
            "><p>Hello " +
            escapeXml(data.name) +
            "</p><button type=\"button\" on-click(\"sendEmail\")>Show map</button></div>");
        }
      }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
