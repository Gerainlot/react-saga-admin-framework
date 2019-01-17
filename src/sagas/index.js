import { all } from 'redux-saga/effects';
import { login } from "./login"; 
import { root } from "./root"; 

export default function* rootSagas(){
    yield all([
        ...root,
        ...login
    ])
}