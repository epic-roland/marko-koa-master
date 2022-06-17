$_mod.def("/marko$4.24.4/src/runtime/components/KeySequence", function(require, exports, module, __filename, __dirname) { function KeySequence() {
  this.___lookup = Object.create(null);
}

KeySequence.prototype.___nextKey = function(key) {
  var lookup = this.___lookup;

  if (lookup[key]) {
    return key + "_" + lookup[key]++;
  }

  lookup[key] = 1;
  return key;
};

module.exports = KeySequence;

});