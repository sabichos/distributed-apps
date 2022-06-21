function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var exenv = createCommonjsModule(function(module) {
  /*!
    Copyright (c) 2015 Jed Watson.
    Based on code that is Copyright 2013-2015, Facebook, Inc.
    All rights reserved.
  */
  (function() {
    var canUseDOM2 = !!(typeof window !== "undefined" && window.document && window.document.createElement);
    var ExecutionEnvironment = {
      canUseDOM: canUseDOM2,
      canUseWorkers: typeof Worker !== "undefined",
      canUseEventListeners: canUseDOM2 && !!(window.addEventListener || window.attachEvent),
      canUseViewport: canUseDOM2 && !!window.screen
    };
    if (module.exports) {
      module.exports = ExecutionEnvironment;
    } else {
      window.ExecutionEnvironment = ExecutionEnvironment;
    }
  })();
});
var canUseDOM = exenv.canUseDOM;
var canUseEventListeners = exenv.canUseEventListeners;
var canUseViewport = exenv.canUseViewport;
var canUseWorkers = exenv.canUseWorkers;
export default exenv;
export {exenv as __moduleExports, canUseDOM, canUseEventListeners, canUseViewport, canUseWorkers};
