import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/app">
            <App />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>,
  document.getElementById('root'),
);
