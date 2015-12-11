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
    self.initialPositions = [];

    // Store positions in case we have to reset later.
    self.el.children.forEach(function (childEl) {
      initialPositions.push(childEl.getAttribute('position'));
    });
  },

  /**
   * TODO: Handle updates.
   */
  update: function (oldData) {
    var data = this.data;

    switch (type) {
      case 'circle': {
        this._layoutCircle();
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
    var numChildren = this.el.querySelectorAll(':scope > a-entity').length;
    var radius = this.data.margin;

    el.children.forEach(function (childEl, i) {
      var rad = 2 * Math.PI / i;
      childEl.setAttribute('position', {
        x: radius * Math.cos(rad),
        y: el.getAttribute('position').y,
        z: radius * Math.sin(rad),
      });
    });
  },

  /**
   * TODO: Line layout.
   */
  _layoutLine: function () {
  }
};
