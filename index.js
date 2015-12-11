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
    for (var i = 0; i < el.children.length; i++) {
      var childEl = el.children[i];
      if (childEl.tagName === 'A-ENTITY') {
        self.initialPositions.push(childEl.getComputedAttribute('position'));
      }
    }
  },

  /**
   * TODO: Handle updates.
   */
  update: function (oldData) {
    var data = this.data;

    switch (data.type) {
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
    var children = el.children;
    var entityChildren = [];
    var radius = this.data.margin;

    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      if (child.tagName === 'A-ENTITY') {
        entityChildren.push(child);
      }
    }

    for (var i = 0; i < entityChildren.length; i++) {
      var childEl = entityChildren[i];
      var rad = i * (2 * Math.PI) / entityChildren.length;
      childEl.setAttribute('position', {
        x: radius * Math.cos(rad),
        y: el.getComputedAttribute('position').y,
        z: radius * Math.sin(rad)
      });
    }
  },

  /**
   * TODO: Line layout.
   */
  _layoutLine: function () {
  }
};
