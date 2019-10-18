import React, { lazy } from 'react';
import { Router } from '@reach/router';

// Use code-splitting here and give the chunk a meaningful name for debugging
// @see: https://webpack.js.org/guides/code-splitting/
const Home = lazy(() => import(/* webpackChunkName: "home" */ './home'));
const Register = lazy(() => import(/* webpackChunkName: "register" */ './register'));

export function Routes() {
  return (
    <Router>
      <Home path="/" />
      <Register path="/register" />
    </Router>
  );
}
