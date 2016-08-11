var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: false,
    entry: {
        'entry': [
            './src/entry/main.jsx'
        ]
    },
    output: {
        path: path.join(__dirname, '../dist'),   // TODO: 使用全局配置
        filename: '[name].js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors.js'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            },
            '__REDUX_LOGGER__': false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loaders: ['babel'],
            include: path.join(__dirname, '../src')  // TODO: 使用全局配置
        }, {
            test: /\.css/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.(gif|jpg|png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=10000'
        }]
    },
    resolve: {
        root: ['../src'],
        extensions: ['', '.jsx', '.js']
    }
};
