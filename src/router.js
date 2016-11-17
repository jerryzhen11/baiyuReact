import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';

import Nav from './components/common/nav'
import Home from './components/home';

export default function({ history }) {
  return (
    <Router history={history}>
        <Route name="首页" path="/" components={Nav}>
            <IndexRoute components={Home} />
            <Route path="/home" component={Home} />
        </Route>
    </Router>
  );
};
