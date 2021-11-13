import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/style/index.scss';
import reportWebVitals from './reportWebVitals';
import { DAppProvider } from "@usedapp/core";
import { Provider } from 'react-redux'
import store from './redux/storeConfig/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DAppProvider config={{}}>
        <App />
      </DAppProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
