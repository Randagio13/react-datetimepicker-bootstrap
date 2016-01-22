var path = require('path');
var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    singleRun: true,
    browsers: ['Chrome'],
    // customLaunchers: {
    //   Chrome_without_security: {
    //     base: 'Chrome',
    //     flags: ['--disable-web-security']
    //   }
    // },
    frameworks: ['mocha'],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots', 'coverage'],
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
          {
              test: /\.(jsx|js)?$/,
              loaders: ['react-hot', 'babel'],
              include: path.join(__dirname, 'app')
          },
          {test: /\.css$/, loader: 'style!css'},
          {test: /\.less$/, loader: 'style!css!less'},
          {test: /\.json$/, loader: 'json-loader'},
          {test: /\.(png|eot|woff|woff2|svg|ttf)$/, loader: 'url-loader'}
        ]
      },
      plugins: [
          new webpack.optimize.UglifyJsPlugin(),
          new webpack.HotModuleReplacementPlugin()
      ]
    },
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
      type: 'html', //produces a html document after code is run
      dir: 'coverage/',
      subdir: 'reports' //path to created html doc
    }
  });
};
