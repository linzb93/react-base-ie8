const webpack = require('webpack');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: 'html-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
                use: "file-loader"
              },
              //图片解析
              {
                test: /\.(jpg|png|gif)$/,
                use: [
                  {
                    //引用图片压缩插件
                    loader: "image-webpack-loader",
                    options: {
                      progressive: true,
                      optimizationLevel: 7,
                      interlaced: false,
                      pngquant: {
                        quality: "65-90",
                        speed: 4
                      }
                    }
                  },
                  {
                    // url-loader 当图片较小的时候会把图片BASE64编码，
                    // 大于limit参数的时候还是使用file-loader 进行拷贝
                    // 当使用这个loader时，不需要再使用file-loader
                    loader: "url-loader",
                    options: {
                      // 指定限制
                      limit: 10000
                    }
                  }
                ]
              },
              {
                test: /\.(mp4|webm)$/,
                use: {
                  loader: "url-loader",
                  options: {
                    limit: 10000
                  }
                }
              }
        ]
    },
    plugins: [
        new ProgressBarPlugin({ 
            format:
            '  build [:bar] ' +
            chalk.green.bold(':percent') +
            ' (:elapsed seconds)'
        })
    ]
};