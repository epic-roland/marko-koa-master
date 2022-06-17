$_mod.def("/core-js$3.23.1/internals/shared", function(require, exports, module, __filename, __dirname) { var IS_PURE = require('/core-js$3.23.1/internals/is-pure'/*'../internals/is-pure'*/);
var store = require('/core-js$3.23.1/internals/shared-store'/*'../internals/shared-store'*/);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.23.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.23.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

});