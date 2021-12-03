import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from '../components';
import { Main as MainLayout } from '../layouts';

import {
  Dashboard as DashboardView,
} from '../views';

const MainRoutes = () => {
  return (
    <Switch>
        <Redirect
            exact={true}
            from="/"
            to="/dashboard"
        />
        <RouteWithLayout
            component={DashboardView}
            exact={true}
            layout={MainLayout}
            path="/dashboard"
        />
    </Switch>
  );
};

export default MainRoutes;
