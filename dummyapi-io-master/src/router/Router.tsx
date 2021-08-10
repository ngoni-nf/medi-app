import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Header} from '../components/header/Header';
import {HomePage} from '../pages/homepage/HomePage';
import {Posts} from '../pages/posts/Posts';
import '../master.scss';

export const MainRouter: React.FC = () => {
  return (
    <Router>
      <div id="wrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/posts" component={Posts} />
        </Switch>
      </div>
    </Router>
  );
};
