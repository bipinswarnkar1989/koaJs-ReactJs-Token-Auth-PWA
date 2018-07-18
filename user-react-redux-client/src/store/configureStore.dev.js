import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history'

const sagaMiddleWare = createSagaMiddleWare();
const history = createBrowserHistory();

const configureStore = initialState => {
    const middlewares = [
        sagaMiddleWare,
        routerMiddleware(history), // for dispatching history actions
    ];
    const store = createStore(
        connectRouter(history)(rootReducer), // new root reducer with router state
        initialState,
        compose(applyMiddleware(...middlewares)),
        window.devToolsExtension ? window.devToolsExtension() : f => f // add support form redux dev tools
    );
    if (module.hot) {
        //Enable Webpack hot module replacement from reducers
        module.hot.accept('../reducers', () => {
          const nextReducer = connectRouter(history)(rootReducer) // eslint-disable-line global-require
          store.replaceReducer(nextReducer);
        });
     };
     sagaMiddleWare.run(rootSaga);
     return store;
}

export default configureStore;