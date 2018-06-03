import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.cli = this.cli.bind(this);
    }

    cli() {
        console.log('click');
    }

    render() {
        return (
            <div>
                <h3 onClick={this.cli}>Click</h3>
            </div>
        );
    }
}