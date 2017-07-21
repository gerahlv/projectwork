import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import Main from './pages/main';
import About from './pages/about';
import Contacts from './pages/contacts';
import Feed from './pages/feed'

class ProjectWork extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main} />
        <Route path='/about' component={About} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/feed' component={Feed} />
      </Router>
    );
  }
}

export default ProjectWork;
