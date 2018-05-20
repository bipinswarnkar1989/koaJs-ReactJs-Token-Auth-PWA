import React, { Component } from 'react';
import { Router, browserHistory  } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div>
          <Router history = {history} routes = {routes} />
        </div>
      </Provider>
    );
  }
}

export default App;
