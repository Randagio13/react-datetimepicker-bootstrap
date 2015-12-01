var webpack = require('webpack');
var path = require('path');
var nodeModules = path.resolve(__dirname, 'node_modules');

module.exports = {
    devtool: process.env.NODE_ENV !== 'production' ? 'eval' : null,
    entry: path.resolve(__dirname, './app/App.jsx'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'App.js',
        publicPath: '/'
    },
    resolve: {
        root: [
            path.resolve('./app/'),
            path.resolve('./node_modules/')
        ],
        modulesDirectories: ['node_modules', 'app'],
        extensions: ['', '.jsx', '.js']
    },
    module: {
        preLoaders: [{
            test: /\.jsx$/,
            loader: 'eslint-loader'
        }],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [nodeModules],
                loader: 'babel'
            },
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.less$/, loader: 'style!css!less'},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.(png|eot|woff|woff2|svg|ttf)$/, loader: 'url-loader'}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new webpack.DefinePlugin({
            process: {
                env: {
                    NODE_ENV: '"' + process.env.NODE_ENV + '"'
                }
            }
        })
    ],
    devServer: {
        contentBase: './build',
        noInfo: false,
        hot: false,
        inline: true
    }
};
