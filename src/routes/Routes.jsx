import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Charts from './../pages/Charts';
import Tables from './../pages/Tables';
import Login from './../pages/Login';
import PrivateRoute from './../Utils/PrivateRoute';
import PieChart from './../pages/PieChart';
import LineChart from '../pages/LineChart';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Login} />

      <PrivateRoute exact path='/charts' component={Charts} />
      <PrivateRoute exact path='/pie_chart' component={PieChart} />
      <PrivateRoute exact path='/line_chart' component={LineChart} />

      <PrivateRoute exact path='/tables' component={Tables} />
    </Switch>
  );
};

export default Routes;
