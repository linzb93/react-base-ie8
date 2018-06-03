const webpack = require('webpack');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

module.exports = {
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../build'),
        publicPath: '/'
    },
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
                test: /\.(jpg|png|gif)/,
                use: 'url-loader',
                include: /src/
            },
            {
                test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new ProgressBarPlugin({ 
            format:
              "  build [:bar] " +
              chalk.green.bold(":percent") +
              " (:elapsed seconds)"
          })
    ]
};