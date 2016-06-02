/* eslint-disable */
var path = require('path');
var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    singleRun: false,
    browsers: ['Chrome'],
    frameworks: ['mocha'],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots', 'coverage', 'mocha'],
    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        root: [
          path.resolve('./app/'),
          path.resolve('./node_modules/')
        ],
        modulesDirectories: ['node_modules'],
        extensions: ['', '.jsx', '.js']
      },
      module: {
        loaders: [
          {
            test: /\.(jsx|js)?$/,
            exclude: /node_modules/,
            loader: 'babel'
          },
          {test: /\.css$/, loader: 'style!css'},
          {test: /\.less$/, loader: 'style!css!less'},
          {test: /\.json$/, loader: 'json-loader'},
          {test: /\.(png|eot|woff|woff2|svg|ttf)$/, loader: 'url-loader'}
        ]
      },
      plugins: [
        new webpack.optimize.UglifyJsPlugin()
      ]
    },
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
      subdir: 'reports'
    }
  });
};
