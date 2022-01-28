import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';

// bring Provider from react-redux, it's the bridge for connecting react to redux
import { Provider } from 'react-redux'

// Bring the redux store too
import store from './redux/store'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);
