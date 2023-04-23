# WebGPU Typescript Starter

The boilerplate to help you quickly start building your simple WebGPU web page. You might find it useful if you want to focus on WebGPU development or not familiar with front end stuff.

## Getting started

```sh
npm install
```

### Develop

```sh
npm run dev
```

### Build

```sh
npm run build
```

The built site goes into `dist/`.

Your static assets (e.g. textures, models) can go into `public/`, which will be copied directly when built.

## Descriptions

Dependencies used, and why they are used
- [Vite](https://github.com/vitejs/vite)
  - Frontend tooling to make development and deployment easier.
  - Modified on top of the [vanilla-ts](https://vitejs.dev/guide/#trying-vite-online) setup.
  - Use [vite-raw-plugin](https://www.npmjs.com/package/vite-raw-plugin) to import spearate WGSL shader files.
- [Typescript](https://www.typescriptlang.org/docs/)
  - Compared to Javascript, the typings can help avoid a lot of common bugs. `tsc` is integrated in Vite so no more overhead for using typescript.
  - [@webgpu/types](https://www.npmjs.com/package/@webgpu/types): types for WebGPU API.
- [wgpu-matrix](https://github.com/greggman/wgpu-matrix): 3D math library for WebGPU.
- [tweakpane](https://cocopon.github.io/tweakpane/) the new dat.GUI thing.
  - [@tweakpane/core](https://www.npmjs.com/package/@tweakpane/core) for typescript support.

You can write your shader in separate `.wgsl` file and import as plain string

```typescript
import triangleVertWGSL from './shaders/triangle.vert.wgsl';
```