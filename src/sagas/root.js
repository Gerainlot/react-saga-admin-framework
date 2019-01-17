import {
    takeEvery,
    call,
    put
} from 'redux-saga/effects';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function* fetchLoading() {
    try {
        yield put({
            type: "ROOT_LOADING_UPDATE",
            value: true
        })  
        yield call(delay, 3000)
        yield put({
            type: "ROOT_LOADING_UPDATE",
            value: false
        })   
    } catch (e) {
        yield put({
            type: "ROOT_LOADING_FAILURE",
            error: e.message
        });
    }
}

function* watchFetchLoading() {
    yield takeEvery('FETCH_LOADING_REQUEST', fetchLoading);
}

export const root = [
    watchFetchLoading(),
]