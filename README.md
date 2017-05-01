# webpack-child-config-plugin

[![Greenkeeper badge](https://badges.greenkeeper.io/diegohaz/webpack-child-config-plugin.svg)](https://greenkeeper.io/)

[![Generated with nod](https://img.shields.io/badge/generator-nod-2196F3.svg?style=flat-square)](https://github.com/diegohaz/nod)
[![NPM version](https://img.shields.io/npm/v/webpack-child-config-plugin.svg?style=flat-square)](https://npmjs.org/package/webpack-child-config-plugin)
[![Build Status](https://img.shields.io/travis/diegohaz/webpack-child-config-plugin/master.svg?style=flat-square)](https://travis-ci.org/diegohaz/webpack-child-config-plugin) [![Coverage Status](https://img.shields.io/codecov/c/github/diegohaz/webpack-child-config-plugin/master.svg?style=flat-square)](https://codecov.io/gh/diegohaz/webpack-child-config-plugin/branch/master)

A webpack plugin that runs/watches another config

## Install

    $ npm install --save-dev webpack-child-config-plugin

## Usage

```js
import ChildConfigPlugin from 'webpack-child-config-plugin'

const serverConfig = {
  ...
  watch: true
  ...
}

const clientConfig = {
  ...
  plugins: [
    new ChildConfigPlugin(serverConfig, {
      // these are the defaults, you can override
      watch: serverConfig.watch,
      when: 'done',
      compilerCallback: () => {}
    })
  ]
}
```

## License

MIT © [Diego Haz](https://github.com/diegohaz)
