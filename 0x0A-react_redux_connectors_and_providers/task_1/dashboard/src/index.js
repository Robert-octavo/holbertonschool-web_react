import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';
import uiReducer, { initialState } from './reducers/uiReducer';
import { Map } from 'immutable';
//import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(uiReducer, Map(initialState));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
