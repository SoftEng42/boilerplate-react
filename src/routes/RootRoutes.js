import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from '../components';
import { Minimal as MinimalLayout } from '../layouts';

import {
  SignIn as SignInView,
  NotFound as NotFoundView
} from '../views';

import MainRoutes from './MainRoutes';
import { shallowEqual, useSelector } from "react-redux";

const RootRoutes = () => {

  const { isAuthorized } = useSelector(
    ({ session }) => ({
      isAuthorized: (session.user == null || (Object.keys(session.user).length === 0 && session.user.constructor === Object)) ? false : true,
    }),
    shallowEqual
  );

  return (
    <Switch>
      <RouteWithLayout
        component={SignInView}
        exact={true}
        layout={MinimalLayout}
        path="/sign-in"
      />
      {!isAuthorized ? (
        <Redirect
          to="/sign-in"
        />
      ) : (
          <MainRoutes />
        )}
      <RouteWithLayout
        component={NotFoundView}
        exact={true}
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default RootRoutes;
