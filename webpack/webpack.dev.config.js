const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const webpackBaseConfig = require('./webpack.base.config');
const dir = require('../server/utils').dir;

module.exports = merge(webpackBaseConfig, {
    entry: [
        'babel-polyfill',
        'webpack-hot-middleware/client?reload=true',
        './src/index.js'
    ],
    output: {
        filename: 'app.js',
        path: dir('./build'),
        publicPath: '/'
    },
    module: {
        rules: [
            // {
            //     test: /\.(js|jsx)$/,
            //     enforce: 'post',
            //     loaders: ['es3ify-loader'],
            //     include: [
            //         dir('./src'), dir('./node_modules/babel-polyfill')
            //     ]
            // }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            inject: true, //js包自动注入html
            template: 'src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new CircularDependencyPlugin({
            exclude: /a\.js|node_modules/,
            failOnError: false //如果有则显示警告即可
        }),
    ],
    mode: 'development',
    devtool: 'inline-source-map'
});