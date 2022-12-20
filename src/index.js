import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';//wraps the content
import { Provider } from 'react-redux';//makes the redux store available to any nested components that need to access the redux store
import store from './redux/store'; // object which provides the state of the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // browserrouter is used to wrap 
  // provider makes the redux store available to any nested components that need to be access the redux store
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
