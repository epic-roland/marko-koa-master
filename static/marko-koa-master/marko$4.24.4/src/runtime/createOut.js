$_mod.def("/marko$4.24.4/src/runtime/createOut", function(require, exports, module, __filename, __dirname) { var actualCreateOut;

function setCreateOut(createOutFunc) {
  actualCreateOut = createOutFunc;
}

function createOut(globalData) {
  return actualCreateOut(globalData);
}

createOut.___setCreateOut = setCreateOut;

module.exports = createOut;

});