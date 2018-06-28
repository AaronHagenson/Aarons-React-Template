import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { AxiosInstance } from 'axios';
import API from './api';

function* axiosGetRequest() {
    return yield call(API.get, 'quotes');
}

function* createQuote(action) {
    try {
        const quoteRequest = action.payload;
        API.post('quotes', quoteRequest)
            .then(res => {
                let id = res;
            });

        yield put({type: "CREATE_QUOTE_SUCCESS", user: user});
    } catch (e) {
        yield put({type: "CREATE_QUOTE_FAILED", message: e.message});
    }
}

function* getQuotes(action) {
    try {
        const response = yield call(axiosGetRequest);

        yield put({type: "GET_QUOTES_SUCCESS", quotes: response.data.quotes})
    } catch (e) {
        yield put({type: "GET_QUOTES_FAILED", message: e.message});
    }
}


export function* watchCreateQuote() {
    yield takeLatest("CREATE_QUOTE", createQuote);
}

export function* watchGetQuotes() {
    yield takeLatest("GET_QUOTES", getQuotes);
}

