import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from '../redux/reducer';
import rootSaga from '../redux/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(createRootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
