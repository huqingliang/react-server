const path = require('path');
const webpack = require('webpack');

const getModulePath = function(name) {
  return path.join(__dirname, 'node_modules', name);
};
module.exports = [{
  entry: {
    'home': './src/js/home/app.js',
    // 'common': './src/js/common/app.js',
  },
  output: {
    path: path.join(__dirname, 'build/js/'),
    filename: "[name].js"
  },
  resolve: {
    alias: {
      'react': getModulePath('react'),
      'react-dom': getModulePath('react-dom'),
    },
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'src'),
        // path.resolve(__dirname, './node_modules/@ali/oneui'),
      ],
      loaders: ['babel'],
    }, {
      test: /\.scss$/,
      loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      // loader: 'style-loader!css-loader!sass-loader'
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}];
