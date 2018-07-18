import React from 'react';
import {
        Route,
        Switch
      } from 'react-router-dom'
import AppWrapper from './components/AppWrapper';
import Home from './containers/Home'

export default (
        <div>
        <AppWrapper/>
         <Switch>
        <Route path="/" component={Home}/>
         </Switch>
        </div>
)