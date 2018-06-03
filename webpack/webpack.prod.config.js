const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // 复制静态资源的插件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清空打包目录的插件
const WebpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin'); //js代码压缩插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//css压缩插件
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
//css按需加载
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = merge(webpackBaseConfig, {
    entry: {
        polyfill: 'babel-polyfill',
        main: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                use: []
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // 页面压缩相关配置
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: { safe: true }
        }),
        new PurifyCSSPlugin({
            paths: glob.sync('src/*.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve('src/lib'), //lib对象文件夹
                to: path.resolve('build/lib'), //lib目标文件夹
                ignore: ['.*']
            }
        ]),
        new CleanWebpackPlugin(['build'], {
            root: path.resolve(process.cwd()),
            verbose: true,
            dry: false
        })
    ],
    optimization: {
        minimizer: [
            new WebpackParallelUglifyPlugin({
                uglifyJS: {
                    output: {
                        beautify: false
                    },
                    compress: {
                        properties: false,
                        drop_console: true,
                        collapse_vars: true,
                        reduce_vars: true
                    },
                    ie8: true
                },
            })
        ]
    },
    mode: 'production'
});