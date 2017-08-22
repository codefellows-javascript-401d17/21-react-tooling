'use strict';

const HtmlPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: 'bundle-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new HtmlPlugin({ template: `${__dirname}/src/index.html`}),
    new ExtractPlugin('bundle-[hash].css')
  ],
  devtool: 'cheap-module-eval-source-map'
};