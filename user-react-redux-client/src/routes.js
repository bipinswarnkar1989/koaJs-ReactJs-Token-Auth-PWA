import React from 'react';
import {
        Route,
        Switch
      } from 'react-router-dom'
import AppWrapper from './components/AppWrapper';
import Home from './containers/Home';
import Login from './containers/Login';

export default (
        <div>
        <AppWrapper/>
         <Switch>
        <Route path="/" component={Home}/>
        <Route path="/login" component={Login}/>
         </Switch>
        </div>
)