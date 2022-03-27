/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';
import LogIn from '../LogIn/index';
import ExamplePage from '../Example/index';
import ExamplePageTwo from '../ExampleTwo/index';
import ChoicePage from '../Choice';
import HomePage from './HomePage';
import FormPage from './FormPage';
import DisruptionPage from './DisruptionPage';
import ContractPage from './ContractPage';
import SupplierPage from './SupplierPage';

const Pages = () => (
  <Switch>
    <Route path="/pages/home" component={HomePage} />
    <Route path="/pages/form" component={FormPage} />
    <Route path="/pages/disruption" component={DisruptionPage} />
    <Route path="/pages/contract" component={ContractPage} />
    <Route path="/pages/supplier" component={SupplierPage} />
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
