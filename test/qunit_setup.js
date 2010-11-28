(function() {
  var originalModule, originalTest, setupFn;
  setupFn = function() {
    return null;
  };
  window.setup = function(fn) {
    return (setupFn = fn);
  };
  window.moreSetup = function(fn) {
    var origSetup;
    origSetup = setupFn;
    return setup(function() {
      origSetup.call(this);
      return fn.call(this);
    });
  };
  window.clearSetup = function() {
    return setup(function() {
      return null;
    });
  };
  originalModule = window.module;
  window.module = function(description) {
    clearSetup();
    return originalModule(description);
  };
  originalTest = window.test;
  window.test = function(description, testFn) {
    var setupSnapshot;
    setupSnapshot = setupFn;
    return originalTest(description, function() {
      var context;
      context = {};
      setupSnapshot.call(context);
      return testFn.call(context);
    });
  };
}).call(this);
