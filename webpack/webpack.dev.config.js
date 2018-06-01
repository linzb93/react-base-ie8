const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');

module.exports = merge(webpackBaseConfig, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': 'development'
        })
    ],
    mode: 'development'
});