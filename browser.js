// Browser distrubution of the A-Frame component.
(function () {
  if (typeof AFRAME === 'undefined' && typeof aframeCore === 'undefined') {
    console.error('Component attempted to register before AFRAME was available.');
    return;
  }

  // Register all components here.
  var components = {
    layout: require('./index').Component
  };

  Object.keys(components).forEach(function (name) {
    if (typeof AFRAME !== 'undefined') {
      if (AFRAME.aframeCore) {
        AFRAME.aframeCore.registerComponent(name, components[name]);
      } else {
        AFRAME.registerComponent(name, components[name]);
      }
      return;
    }
    if (typeof aframeCore !== 'undefined') {
      aframeCore.registerComponent(name, components[name]);
    }
  });
})();
