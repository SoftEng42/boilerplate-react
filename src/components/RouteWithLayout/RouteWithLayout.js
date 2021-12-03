import React from 'react';
import { Route } from 'react-router-dom';

export default function RouteWithLayout(props) {
    const { layout: Layout, component: Component } = props;

    return (
      <Route
        key={props.key}
        path={props.path}
        exact={props.exact}
        component={() => <Layout><Component /></Layout>}
      />
    );
}
