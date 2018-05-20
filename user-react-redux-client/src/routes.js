import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppWrapper from './components/AppWrapper';
import Home from './containers/Home'

export default (
        <Route path="/" component={AppWrapper}>
        <IndexRoute component={Home}/>
        
        </Route>
)