var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: process.env.NODE_ENV !== 'production' ? 'eval' : null,
    entry: './app/App.jsx',
    output: {
        path: './build',
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
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                }
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
