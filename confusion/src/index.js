import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // importing bootstrap
import 'font-awesome/css/font-awesome.min.css'; // importing font-awesome
import 'bootstrap-social/bootstrap-social.css'; // importing bootstrap-social
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();