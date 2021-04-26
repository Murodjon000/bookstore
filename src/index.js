import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';
import { createBook } from './actions';

const store = createStore(rootReducer);

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];
store.dispatch(
  createBook({ title: 'Think and Grow Rich', category: categories[5] })
);
store.dispatch(createBook({ title: 'O`tkan Kunlar', category: categories[1] }));
store.dispatch(createBook({ title: 'Little Prince', category: categories[4] }));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
