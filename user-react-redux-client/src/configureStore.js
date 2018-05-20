import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';

const sagaMiddleWare = createSagaMiddleWare();

const configureStore = initialState => {
    const middlewares = [
        sagaMiddleWare,
    ];
    const store = createStore(
        compose(applyMiddleware(...middlewares)),
        window.devToolsExtension ? window.devToolsExtension() : f => f // add support form redux dev tools
    );
    if (module.hot) {
        //Enable Webpack hot module replacement from reducers
        module.hot.accept('../reducers', () => {
          const nextReducer = require('../reducers').default; // eslint-disable-line global-require
          store.replaceReducer(nextReducer);
        });
     };
     return store;
}

export default configureStore;