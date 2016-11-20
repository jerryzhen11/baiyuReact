import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';

import Frame from './components/common/frame';
import Home from './components/home';
import Test from './components/test';

export default function({ history }) {
  return (
    <Router history={history}>
        <Route name="首页" path="/" components={Frame}>
            <IndexRoute components={Home} />
            <Route path="/home" component={Home} />
            <Route path="/test" components={Test}></Route>
        </Route>
    </Router>
  );
};
