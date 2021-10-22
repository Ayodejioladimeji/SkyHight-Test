import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Charts from './../pages/Charts';
import Tables from './../pages/Tables';
import Login from './../pages/Login';
import PrivateRoute from './../Utils/PrivateRoute';
import PieChart from './../pages/PieChart';
import LineChart from '../pages/LineChart';
import { getUser } from '../Utils/Common';
import NotFound from './../pages/NotFound';

const Routes = () => {
  const isLogged = getUser();
  return (
    <Switch>
      <Route exact path='/login' component={isLogged ? NotFound : Login} />

      <PrivateRoute exact path='/' component={Charts} />
      <PrivateRoute exact path='/pie_chart' component={PieChart} />
      <PrivateRoute exact path='/line_chart' component={LineChart} />

      <PrivateRoute exact path='/tables' component={Tables} />
    </Switch>
  );
};

export default Routes;
