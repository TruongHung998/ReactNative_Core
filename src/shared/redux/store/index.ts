import {applyMiddleware, createStore} from 'redux';
import * as thunkMiddleware from 'redux-thunk';
import {combinedReducer} from '../reducers/index'

let middlewares = [thunkMiddleware.default];

const store = createStore(combinedReducer, applyMiddleware(...middlewares));

function initStore() {
    let _store: any;
    _store = createStore(combinedReducer, applyMiddleware(...middlewares));
    return _store;
}

// export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export default initStore();
