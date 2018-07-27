import React from 'react';
import {
        Route,
        Switch
      } from 'react-router-dom'
import AppWrapper from './components/AppWrapper';
import Home from './containers/Home';
import Login from './containers/Login';
import PrivateRoute from './containers/PrivateRoute';

export default (
        <div>
        <AppWrapper/>
         <Switch>
        <PrivateRoute exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
         </Switch>
        </div>
)