const path = require('path');
const webpack = require('webpack');
const VERSION = require('./package.json').version;

const getModulePath = function(name) {
  return path.join(__dirname, 'node_modules', name);
};
module.exports = [{
  entry: {
    'home': './src/js/home/app.js',
    'device': './src/js/device/app.js',
    'vendors': ['react', 'react-dom', 'react-router'],
  },
  output: {
    path: path.join(__dirname, 'build', VERSION, 'js'),
    filename: "[name].js"
  },
  resolve: {
    alias: {
      'react': getModulePath('react'),
      'react-dom': getModulePath('react-dom'),
      'react-router': getModulePath('react-router'),
      // 'components': path.join(__dirname, './js/components//'),
    },
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      loaders: ['babel'],
    }, {
      test: /\.scss$/,
      loaders: ["style", "css?sourceMap", "sass?sourceMap"]
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}];
