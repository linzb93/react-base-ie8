const express = require('express');
const webpack = require('webpack');
// const util = require('react-dev-utils');

const app = express();
let webpackConfig;
const port = 3000;

if (process.env.NODE_ENV === 'development') {
    webpackConfig = require('../webpack/webpack.dev.config');
} else if (process.env.NODE_ENV === 'production') {
    webpackConfig = require('../webpack/webpack.prod.config');
}

const compiler = webpack(webpackConfig, (err) => {
    if (err) {
        throw err;
    }
});
// 启动服务器
const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: '/',
    quiet: true
});
// 热更新
// const hotMiddleware = require('webpack-hot-middleware')(compiler);

app.use(devMiddleware);
// app.use(hotMiddleware);

// devMiddleware.waitUntilValid(() => {
//     openWindow('http://localhost:' + port);
// })
app.listen(3000);