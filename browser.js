// Browser distrubution of the A-Frame component.
(function () {
  if (!AFRAME) {
    console.error('Component attempted to register before AFRAME was available.');
    return;
  }

  // Register all components here.
  var components = {
    layout: require('./index').component
  };

  Object.keys(components).forEach(function (name) {
    if (AFRAME.aframeCore) {
      AFRAME.aframeCore.registerComponent(name, components[name]);
    } else {
      AFRAME.registerComponent(name, components[name]);
    }
  });
})();
