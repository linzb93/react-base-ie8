import "babel-polyfill";
import React from 'react'
import ReactDom from 'react-dom'
import App from './App';

const render = () => {
    ReactDOM.render(<App />,
        document.getElementById('root'))
}

if (module.hot) {
    module.hot.accept(["./App"], () => {
      ReactDOM.unmountComponentAtNode(DOM);
      render();
    });
  }
  render();
  