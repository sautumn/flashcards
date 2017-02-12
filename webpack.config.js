var webpack = require('webpack');
var path = require('path');

// the directory path of the bundle file output
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
// the directory path of the React application's codebase
var APP_DIR = path.resolve(__dirname, 'src/client/app');

// entry specifies the entry file using which the bundling process starts
// output instructs Webpack what to do after the bundling process has been completed
var config = {
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
      }
    ]
  },
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;
