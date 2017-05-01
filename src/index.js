// @flow
import webpack from 'webpack'

type WebpackConfig = {
  watch: boolean | {},
}

type Options = {
  config: WebpackConfig,
  watch: boolean,
  when: string,
  compilerCallback: () => void
}

class ChildConfigPlugin {
  options: Options
  watching = false

  constructor(config: WebpackConfig, {
    watch = !!config.watch,
    when = 'done',
    compilerCallback = () => {},
  }: Options = {}) {
    this.options = { config, watch, when, compilerCallback }
  }

  apply(compiler: any) {
    const { config, watch, when, compilerCallback } = this.options

    compiler.plugin(when, () => {
      if (this.watching) return
      const child = webpack(config)
      if (watch) {
        child.watch(config.watchOptions || config.watch, compilerCallback)
      } else {
        child.run(compilerCallback)
      }
      this.watching = true
    })
  }
}

module.exports = ChildConfigPlugin
