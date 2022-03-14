/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';
import LogIn from '../LogIn/index';
import ExamplePage from '../Example/index';
import ExamplePageTwo from '../ExampleTwo/index';
import ChoicePage from '../Choice';
import HomePage from '../HomePage';

const Pages = () => (
  <Switch>
    <Route path="/pages/home" component={HomePage} />
    <Route path="/pages/two" component={ExamplePageTwo} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/pages" component={Pages} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/log_in" component={LogIn} />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
