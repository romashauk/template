import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import App from 'containers/App';
const render = () => {
    try {
        ReactDOM.render(<App />, document.getElementById('root'));
    } catch (err) {
        console.error(err);
    }
};

render();
