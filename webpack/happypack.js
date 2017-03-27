const HappyPack = require('happypack')
const kebabCase = require('lodash/kebabCase')
const { group } = require('@webpack-blocks/webpack2')

const happypackConfig = {
  cache: !process.env.DISABLE_HAPPY_CACHE,
  cacheContext: {
    env: process.env.NODE_ENV,
    refresh: process.env.REFRESH_HAPPY_CACHE ? Math.random() : 0,
  },
}

const happifyBlock = block => (...args) => {
  const compiledBlock = block(...args)
  if (!compiledBlock.module || !compiledBlock.module.rules) return {}

  const plugins = []
  const rules = compiledBlock.module.rules.map((rule, i) => {
    const id = `${kebabCase(rule.test.source)}-${i}`
    const loaders = [].concat(rule.loader || rule.use)
    const plugin = new HappyPack(Object.assign({ id, loaders }, happypackConfig))

    plugins.push(plugin)

    return Object.assign({}, rule, {
      loader: `happypack/loader?id=${id}`,
    })
  })

  return {
    plugins,
    module: {
      rules,
    },
  }
}

module.exports = blocks => {
  if (process.env.DISABLE_HAPPY) {
    return group(blocks)
  }
  return group(blocks.map(block => happifyBlock(block)))
}
