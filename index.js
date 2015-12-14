/**
 Layout component for A-Frame.
*/
module.exports.component = {
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

  /**
   * Store initial positions in case need to reset on component removal.
   */
  init: function () {
    var self = this;
    var el = self.el;
    self.children = el.getChildEntities();
    self.initialPositions = [];

    self.children.forEach(function (childEl) {
      self.initialPositions.push(childEl.getComputedAttribute('position'));
    });
  },

  /**
   * Update child entity positions.
   */
  update: function (oldData) {
    var children = this.children;
    var data = this.data;
    var el = this.el;
    var numChildren = children.length;
    var positionFn;
    var positions;
    var startPosition = el.getComputedAttribute('position');

    switch (data.type) {
      case 'circle': {
        positionFn = getCirclePositions;
        break;
      }
      default: {
        positionFn = getLinePositions;
      }
    }

    positions = positionFn(data, numChildren, startPosition);
    setPositions(children, positions);
  },

  /**
   * Reset positions.
   */
  remove: function () {
    setPositions(children, this.initialPositions);
  }
};

/**
 * Get positions for `circle` layout.
 * TODO: arcLength.
 */
function getCirclePositions (data, numChildren, startPosition) {
  var positions = [];

  for (var i = 0; i < numChildren; i++) {
    var rad = i * (2 * Math.PI) / numChildren;
    positions.push({
      x: startPosition.x + data.margin * Math.cos(rad),
      y: startPosition.y,
      z: startPosition.z + data.margin * Math.sin(rad)
    });
  }
  return positions;
}
module.exports.getCirclePositions = getCirclePositions;

/**
 * Get positions for `line` layout.
 * TODO: 3D margins.
 */
function getLinePositions (data, numChildren, startPosition) {
  var positions = [];

  for (var i = 0; i < numChildren; i++) {
    positions.push({
      x: startPosition.x + data.margin * i,
      y: startPosition.y,
      z: startPosition.z
    });
  }
  return positions;
}
module.exports.getLinePositions = getLinePositions;

/**
 * Set position on child entities.
 *
 * @param {array} els - Child entities to set.
 * @param {array} positions - Array of coordinates.
 */
function setPositions (els, positions) {
  els.forEach(function (el, i) {
    el.setAttribute('position', positions[i]);
  });
}
