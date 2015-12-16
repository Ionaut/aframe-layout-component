## aframe-layout

3D layout component and helpers for A-Frame VR.

This is a work in progress and depends on pending changes to A-Frame.

![](https://cloud.githubusercontent.com/assets/674727/11851982/662a8dee-a3ea-11e5-92cf-4b814e2c494d.png)

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
