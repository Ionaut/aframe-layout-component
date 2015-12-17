/**
 * Layout component for A-Frame.
 */
module.exports.component = {
  schema: {
    columns: { default: 1, min: 0, if: { type: ['box'] } },
    margin: { default: 1, min: 0, if: { type: ['box', 'line'] } },
    radius: { default: 1, min: 0, if: { type: ['circle'] } },
    type: { default: 'line', if: ['box', 'circle', 'line'] }
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
      case 'box': {
        positionFn = getBoxPositions;
        break;
      }
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
 * Get positions for `box` layout.
 */
function getBoxPositions (data, numChildren, startPosition) {
  var positions = [];
  var rows = Math.ceil(numChildren / data.columns);

  for (var row = 0; row < rows; row++) {
    for (var column = 0; column < data.columns; column++) {
      positions.push({
        x: column * data.margin,
        y: row * data.margin,
        z: 0
      });
    }
  }

  return positions;
}
module.exports.getBoxPositions = getBoxPositions;

/**
 * Get positions for `circle` layout.
 * TODO: arcLength.
 */
function getCirclePositions (data, numChildren, startPosition) {
  var positions = [];

  for (var i = 0; i < numChildren; i++) {
    var rad = i * (2 * Math.PI) / numChildren;
    positions.push({
      x: startPosition.x + data.radius * Math.cos(rad),
      y: startPosition.y,
      z: startPosition.z + data.radius * Math.sin(rad)
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
  data.columns = numChildren;
  return getBoxPositions(data, numChildren, startPosition);
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
