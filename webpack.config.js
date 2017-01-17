const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/app/index.js',
  output: {
    filename: 'bundle.min.js',
    path: './dist'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
      query: {
        presets: ['es2015']
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Applicazione utilissima'
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = config;
