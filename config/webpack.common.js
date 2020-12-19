const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const sourcePath = path.resolve(__dirname, '../src')
const outputPath = path.resolve(__dirname, '../dist')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: outputPath,
    publicPath: '/',
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name]-[contenthash].js'
  },
  module: {
    rules: [
      // javascript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      // fonts and svgs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline'
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: [sourcePath, 'node_modules'],
    alias: {
      '@kitabisa': sourcePath
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Kitabisa Campaigns',
      template: './public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      }
    }),
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV !== 'production'
    }),
  ],
}