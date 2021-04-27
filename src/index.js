import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';
import { createBook, filterBook } from './actions';
import categories from './helper/category';

const store = createStore(rootReducer);

store.dispatch(createBook({ title: 'React', category: categories[5] }));
store.dispatch(createBook({ title: 'O`tkan Kunlar', category: categories[1] }));
store.dispatch(createBook({ title: 'Little Prince', category: categories[4] }));

const MainApp = () => (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
ReactDOM.render(<MainApp />, document.getElementById('root'));
