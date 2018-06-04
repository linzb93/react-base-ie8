import React from 'react';
import styled from 'styled-components';

const H3 = styled.h3`
    color: #f00;
`
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.cli = this.cli.bind(this);
    }

    cli() {
        console.log('click23');
    }

    render() {
        return (
            <div>
                <H3 onClick={this.cli}>Click</H3>
            </div>
        );
    }
}