## aframe-layout-component

3D layout component and helpers for A-Frame VR.

![](https://cloud.githubusercontent.com/assets/674727/11851982/662a8dee-a3ea-11e5-92cf-4b814e2c494d.png)

### Properties

| Property | Description                                                                               | Default Value |
| --------- | -----------                                                                               | ------------- |
| type      | Type of layout. Can be one of `box`, `circle`, `cube`, `dodecahedron`, `line`, `pyramid`. | `line`        |
| margin    | Margin in meters.                                                                         | 1             |
| radius    | Radius in meters.                                                                         | 1             |

### Usage

#### Browser Installation

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.2.0/aframe.min.js"></script>
  <script src="https://rawgit.com/ngokevin/aframe-layout-component/master/dist/aframe-layout-component.min.js"></script>
</head>

<body>
  <a-scene>
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
  </a-scene>
</body>
```

#### NPM Installation

Install via NPM:

```bash
npm install aframe-layout-component
```

Then register and use.

```js
require('aframe');
require('aframe-layout-component');
```
