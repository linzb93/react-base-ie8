const express = require('express');
const webpack = require('webpack');
// const util = require('react-dev-utils');

const app = express();
let webpackConfig;
const port = 3000;

if (process.env.NODE_ENV === 'development') {
    webpackConfig = require('../webpack/webpack.dev.config');
} else {
    webpackConfig = require('../webpack/webpack.prod.config');
}

const compiler = webpack(webpackConfig);
// 启动服务器
const devMiddleware = require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: '/',
    quiet: true
});
// 热更新
const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    noInfo: true
});

app.use(devMiddleware);
app.use(hotMiddleware);

app.use('/', require('../controller'));

// devMiddleware.waitUntilValid(() => {
//     openWindow('http://localhost:' + port);
// })
app.listen(port);