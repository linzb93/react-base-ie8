import "babel-polyfill";
import React from 'react'
import ReactDOM from "react-dom";
import App from './App';

const DOM = document.getElementById('root');

const render = () => {
    ReactDOM.render(<App />, DOM);
}

if (module.hot) {
    module.hot.accept(["./App"], () => {
      ReactDOM.unmountComponentAtNode(DOM);
      render();
    });
  }
  render();
  