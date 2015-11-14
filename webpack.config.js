var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: process.env.NODE_ENV !== 'production' ? 'eval' : null,
    entry: './app/app.jsx',
    output: {
        path: './build',
        filename: 'app.js',
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
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.less$/, loader: 'style!css!less'},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.(png|eot|woff|woff2|svg|ttf)$/, loader: 'url-loader'}
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            process: {
                env: {
                    NODE_ENV: '"' + process.env.NODE_ENV + '"',
                    BETA: JSON.stringify(JSON.parse(!!process.env.BETA))
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
