import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import {rootSaga} from './root-saga'
import messageReducer from './reducers/message'
import quotesReducer from './reducers/quotes-reducer'

const reducer = combineReducers({
  messageReducer,
  quotesReducer
})
// const store = createStore(
//   reducer,
//   applyMiddleware(thunk)
// )

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

export default store;