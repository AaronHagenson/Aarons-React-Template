import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import {rootSaga} from './root-saga'
import quotesReducer from './reducers/quotes-reducer'

const reducer = combineReducers({
  quotesReducer
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

export default store;