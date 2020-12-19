const CopyWebpackPlugin =  require('copy-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

const copyPlugin = new CopyWebpackPlugin({
  patterns: [{
    from: './public',
    to: '.',
    globOptions: { dot: true, ignore: ['**/index.html']}
  }]
})

const serviceWorkerPlugin = new WorkboxPlugin.GenerateSW({
  swDest: 'sw.js',
  clientsClaim: true,
  skipWaiting: true
})

const withPlugin = () => {
  const plugins = [copyPlugin]
  if(!/development/i.test(process.env.NODE_ENV)){
    plugins.push(serviceWorkerPlugin)
  }

  return plugins
}

module.exports = {
  mode: 'production',
  plugins: withPlugin(),
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  }
}