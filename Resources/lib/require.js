(function(context) {
  var cache = {};
  var nativeRequire = context.require;
  context.require =  function(file) {
    // First check for native module
    if (file.indexOf(".") > -1 && file.indexOf("/") === -1) {
      return nativeRequire(file);
    }

    Ti.API.debug("Requiring: " + file);
    if (cache[file]) {
      return cache[file];
    }
    try {
      var rfile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, file + ".js");
      var contents = rfile.read().text;
      var mod = eval.call(context, "(function(exports){var __OXP=exports;var module={'exports':exports};" + contents + ";if(module.exports !== __OXP){return module.exports;}return exports;})({})");
      cache[file] = mod;
      return mod;
    } catch(e) { 
      Ti.API.error('Could not require: ' + file + "\n" + JSON.stringify(e));
      return {};
    }
  };
}(this));
