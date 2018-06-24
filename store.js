import { createStore, combineReducers, applyMiddleware } from 'redux'
import messageReducer from './reducers/message'
import createSagaMiddleware from 'redux-saga'

import mySaga from './sagas'

const reducer = combineReducers({
  messageReducer
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

sagaMiddleware.run(mySaga);

export default store;