/**
 Layout component for A-Frame.
*/
module.exports = {
  schema: {
    type: {
      default: 'line',
      oneOf: ['circle', 'line']
    },
    margin: {
      default: 1,
      min: 0
    }
  },

  init: function () {
    var self = this;
    var el = self.el;
    self.initialPositions = [];

    // Store positions in case we have to reset later.
    el.getChildEntities().forEach(function (childEl) {
      self.initialPositions.push(childEl.getComputedAttribute('position'));
    });
  },

  /**
   * TODO: Handle updates.
   */
  update: function (oldData) {
    var data = this.data;

    switch (data.type) {
      case 'circle': {
        this._layoutCircle();
        break;
      }
      default: {
        this._layoutLine();
      }
    }
  },

  /**
   * TODO: Reset positions on remove.
   */
  remove: function () {

  },

  _layoutCircle: function () {
    var el = this.el;
    var radius = this.data.margin;

    el.getChildEntities().forEach(function (childEl) {
      var rad = i * (2 * Math.PI) / entityChildren.length;
      childEl.setAttribute('position', {
        x: radius * Math.cos(rad),
        y: el.getComputedAttribute('position').y,
        z: radius * Math.sin(rad)
      });
    });
  },

  _layoutLine: function () {
    var el = this.el;
    var elPos = el.getComputedAttribute('position');
    var current = 0;
    var margin = this.data.margin;

    el.getChildEntities().forEach(function (childEl) {
      current += margin;
      childEl.setAttribute('position', {
        x: current,
        y: 0,
        z: 0
      });
    });
  },

  parse: function (value) {

  },

  stringify: function (value) {

  }
};
