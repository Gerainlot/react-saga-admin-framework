import {
    takeEvery,
    call,
    put
} from 'redux-saga/effects';


const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function* fetchLogin(action) {
    try {
        yield put({
            type: "FETCH_LOGIN_LOADING"
        });
        yield call(delay, 3000)
        let { username, password } = action.payload;
        yield put({
            type: "FETCH_LOGIN_SUCCEEDED",
            payload: {
                data: {
                    username,
                    password
                }
            }
        })   
    } catch (e) {
        yield put({
            type: "FETCH_LOGIN_FAILURE",
            error: e.message
        });
    }
}

function* fetchLogout(action) {
    try {
        yield call(delay, 1000)
        yield put({
            type: "LOGIN_OUT_SUCCEEDED",
        })   
    } catch (e) {
        
    }
}

function* watchFetchLogin() {
    yield takeEvery('FETCH_LOGIN_REQUEST', fetchLogin);
}
function* watchFetchLogout() {
    yield takeEvery('LOGIN_OUT', fetchLogout);
}

export const login = [
    watchFetchLogin(),
    watchFetchLogout()
]