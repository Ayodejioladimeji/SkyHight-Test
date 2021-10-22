import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getUser } from './Common';

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
  const user = getUser();
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
