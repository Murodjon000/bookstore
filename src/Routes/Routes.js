import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../components/App';
import Header from '../components/Header';

const Routes = () => (
  <div>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/categories" exact component={App} />
      </Switch>
    </Router>
  </div>
);

export default Routes;
