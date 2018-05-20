import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleWare = createSagaMiddleWare();

const configureStore = initialState => {
    const middlewares = [
        sagaMiddleWare,
    ];
    const store = createStore(
        rootReducer,
        initialState,
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
     sagaMiddleWare.run(rootSaga);
     return store;
}

export default configureStore;