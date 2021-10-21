const path = require('path')
module.exports = {
  outputDir: './build',
  publicPath: './',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  }
}
