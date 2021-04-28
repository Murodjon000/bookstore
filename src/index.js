import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createBook } from './actions';
import categories from './helper/category';
import Routes from './Routes/Routes';

const store = createStore(rootReducer);

/* eslint-disable */

store.dispatch(
  createBook({ title: 'Between two doors', category: categories[1] })
);
store.dispatch(
  createBook({ title: 'Life spent in a dream', category: categories[5] })
);
store.dispatch(
  createBook({ title: 'Spring Passed By', category: categories[2] })
);

const MainApp = () => (
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>
);
ReactDOM.render(<MainApp />, document.getElementById('root'));
