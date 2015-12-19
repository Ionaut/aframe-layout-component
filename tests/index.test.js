var Aframe = require('aframe-core');
var layout = require('../index.js').component;
var entityFactory = require('./helpers').entityFactory;

Aframe.registerComponent('layout', layout);

describe('layout', function () {
  beforeEach(function (done) {
    this.el = entityFactory();
    this.el.addEventListener('loaded', function () {
      done();
    });
  });

  describe('box', function () {
    it('can lay out in a line', function (done) {
      var el = this.el;
      appendChildren(el, 3).then(function (children) {
        el.setAttribute('layout', 'type: box; margin: 1');
        assert.equal(getPos(children[0]), '0 0 0');
        assert.equal(getPos(children[1]), '0 1 0');
        assert.equal(getPos(children[2]), '0 2 0');
        done();
      });
    });
  });
});

function appendChildren (el, n) {
  var children = [];
  for (var i = 0; i < n; i++) {
    var child = document.createElement('a-entity');
    children.push(child);
  }
  return new Promise(function (resolve) {
    var childrenLoaded = children.map(function (child) {
      return new Promise(function (resolve) {
        child.addEventListener('loaded', resolve);
      });
    })
    Promise.all(childrenLoaded).then(function () {
      if (children) { resolve(children); }
    });
    children.forEach(function (child) {
      el.appendChild(child);
    });
  });
}

function getPos (el) {
  return Aframe.utils.coordinates.stringify(el.getAttribute('position'));
}
