import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import store from './redux/store';
import { setUserDetails, logoutUser } from './redux/actions/UserActions';
import LoadingPage from './utils/LoadingPage';
import './index.css';
import App, { history } from './App';
import reportWebVitals from './reportWebVitals';

const jsx = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

let hasRender = false;

const findUser = () => {
  if (Cookies.get('userToken')) {
    const decoded = jwt_decode(Cookies.get('userToken'));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(logoutUser()).then(() => renderApp());
    } else {
      store.dispatch(setUserDetails(history)).then(() => renderApp());
    }
  } else {
    renderApp();
  }
};

const renderApp = () => {
  if (!hasRender) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRender = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

findUser();
reportWebVitals();
