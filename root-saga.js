import { all, call } from 'redux-saga/effects'
import { watchCreateQuote, watchGetQuotes } from './quote-saga'

export const rootSaga = function* rootSaga() {
    yield all({
      // add your sagas here
      watchCreateQuote: call(watchCreateQuote),
      watchGetQuotes: call(watchGetQuotes)
    })
  }
  