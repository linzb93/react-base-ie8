import React from 'react';
import { Router, Route, useRouterHistory, hashHistory } from 'react-router';
import { createHashHistory } from 'history'
import 'fetch-ie8'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.cli = this.cli.bind(this);
    }

    cli() {
        console.log(1111)
        fetch('/name')
            .then(() => {
                console.log(2222);
                alert(123);
            });
    }

    render() {
        return <h3 onClick={this.cli}>首页233</h3>
    }
}
console.log(343434)

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/user',
        component: () => <h3>用户主页</h3>
    }
]
const rootRoute = {
    path: '/',
    component: Index,
    childRoutes: [{
        path: '/user',
        component: () => <div>asjdlksajdlaklsd</div>
    }]
}

const history = useRouterHistory(
    createHashHistory
)({
    queryKey: false
})

export default class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Route path="/" component={Index} />
            </Router>
        );
    }
}