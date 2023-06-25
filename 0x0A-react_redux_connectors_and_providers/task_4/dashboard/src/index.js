import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore} from 'redux';
import { applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import uiReducer, { initialState } from './reducers/uiReducer';
import { Map } from 'immutable';
//import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';

//const root = ReactDOM.createRoot(document.getElementById('root'));
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(uiReducer, Map(initialState), enhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
