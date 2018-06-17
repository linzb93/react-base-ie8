import React from 'react';
import { Router, hashHistory } from 'react-router';

const routes = [
    {
        path: '/',
        component: () => <h3>首页</h3>
    },
    {
        path: '/user',
        component: () => <h3>用户主页</h3>
    }
]

export default class App extends React.Component {

    render() {
        return (
            <Router history={hashHistory} routes={routes}  />
        );
    }
}