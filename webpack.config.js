const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./app.jsx",

  output: {
    path: "javascripts",
    filename: "bundle.js",
  },

  node: {
    fs: "empty"
  },

  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  }
};
