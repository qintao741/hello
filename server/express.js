var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackDevConfig = require('../config/webpack.dev');

var ASSETS_DIR = path.join(__dirname, '..', 'assets');

module.exports = function () {
    var app = new express();

    var compiler = webpack(webpackDevConfig);
    app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackDevConfig.output.publicPath}));
    app.use(webpackHotMiddleware(compiler));

    app.use('/assets', express.static(ASSETS_DIR));

    app.get("/", function (req, res) {

        res.sendFile(__dirname + '/index.html');
    });

    app.get("/app", function (req, res) {
        res.sendFile(__dirname + '/app.html');
    });
    app.get("/report", function (req, res) {
        res.sendFile(__dirname + '/report.html');
    });

    require('./api')(app);

    var APP_PORT = 8080;
    app.listen(APP_PORT, function (error) {
        if (error) {
            console.error(error);
        } else {
            console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", APP_PORT, APP_PORT);
        }
    });
};
