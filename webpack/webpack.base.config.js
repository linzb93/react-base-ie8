const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.js',
        path: '/build',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                test: /.\js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /.\html$/,
                use: 'html-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};