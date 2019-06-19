import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// when importing a node module, import the name of the npm package first, then look at docs...🤷🏻‍♂️
import "@fortawesome/fontawesome-free/css/all.css"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
