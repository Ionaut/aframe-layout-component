## aframe-layout-component

> Depends on [aframe#dev](https://github.com/aframevr/aframe/tree/dev) branch.

3D layout component and helpers for A-Frame VR.

![](https://cloud.githubusercontent.com/assets/674727/11851982/662a8dee-a3ea-11e5-92cf-4b814e2c494d.png)

### Usage

Install (or directly include the [browser files](dist)).

```bash
npm install --save aframe-layout
```

Register.

```js
require('aframe');
var layout = require('aframe-layout').Component;
AFRAME.registerComponent('layout', layout);
```

Use.

```html
<a-entity layout="type: circle; margin: 10">
  <a-entity geometry="primitive: box" material></a-entity>
  <a-entity geometry="primitive: box" material></a-entity>
  <a-entity geometry="primitive: box" material></a-entity>
  <a-entity geometry="primitive: box" material></a-entity>
  <a-entity geometry="primitive: box" material></a-entity>
  <a-entity geometry="primitive: box" material></a-entity>
  <a-entity geometry="primitive: box" material></a-entity>
  <a-entity geometry="primitive: box" material></a-entity>
</a-entity>
```

This will layout all of the child entities in a circle.

### Attributes

| Attribute | Description                                                                               | Default Value |
| --------- | -----------                                                                               | ------------- |
| type      | Type of layout. Can be one of `box`, `circle`, `cube`, `dodecahedron`, `line`, `pyramid`. | `line`        |
| margin    | Margin in meters.                                                                         | 1             |
| radius    | Radius in meters.                                                                         | 1             |
