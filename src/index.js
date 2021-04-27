import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const MainApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(<MainApp />, document.getElementById('root'));
