var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
    devtool: '#sourcemap',
    entry: {
        'entry': [
            'webpack-hot-middleware/client',
            './src/entry/main.jsx']
    },
    output: {
        path: path.join(__dirname, '../dist'),  // TODO: 使用全局配置
        filename: '[name].js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors.js'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            '__REDUX_LOGGER__': true
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: path.join(__dirname, '../src') // TODO: 使用全局配置
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
    postcss: [
        require('lost'),
        autoprefixer({browsers: ['> 1%', 'last 2 versions']})
    ],
    resolve: {
        root: ['../src'],
        extensions: ['', '.jsx', '.js']
    }
};
