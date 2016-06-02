/* eslint-disable */
var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: process.env.NODE_ENV !== 'production' ? 'eval' : 'cheap-module-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/App'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'App.js',
    publicPath: '/'
  },
  resolve: {
    root: [
      path.resolve('./app/'),
      path.resolve('./node_modules/')
    ],
    modulesDirectories: ['node_modules'],
    extensions: ['', '.jsx', '.js']
  },
  module: {
    preLoaders: [{
      test: /\.jsx$/,
      loader: 'eslint-loader'
    }],
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            'transform-node-env-inline'
          ],
          cacheDirectory: true
        }
      },
      {
        test: /\.jsx?$/,
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: '"' + process.env.NODE_ENV + '"',
          BETA: JSON.stringify(JSON.parse(!!process.env.BETA))
        }
      }
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ],
  devServer: {
    contentBase: './build',
    noInfo: false,
    hot: true,
    inline: true,
    stats: {
      colors: true
    }
  }
};
