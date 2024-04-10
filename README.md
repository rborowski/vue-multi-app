# vue-multi-app

Example for Vue 3 multi-app.
This structure consists of two separate applications in one Vue 3 setup.
You can build multiple separate apps with one codebase. Just build with appropriate vite config file like this:

```sh
vite build --config <config file name>
```
You can configure scripts in package.json to build them all at once.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev:personal
npm run dev:professional

```

### Compile and Minify for Production

```sh
npm run build
```
