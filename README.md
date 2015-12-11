## aframe-layout

3D layout component and helpers for A-Frame VR.

This is a work in progress.

### Usage

Install.

```bash
npm install --save aframe-layout
```

Register.

```js
var layout = require('aframe-layout').component;
require('aframe-core').registerComponent('layout', layout);
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

| Attribute | Description                                               | Default Value |
| --------- | -----------                                               | ------------- |
| type      | Type of layout. Can be one of `circle`, `line`, `sphere`. | `line`        |
| margin    | Margin in meters.                                         | 1             |
