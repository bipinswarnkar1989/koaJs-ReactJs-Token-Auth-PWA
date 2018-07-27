import { all } from 'redux-saga/effects';
import watchAuth from './auth/watchAuth';
import watchLogin from './auth/watchLogin';

export default function* rootSaga(){
    yield all([
       watchAuth(),
       watchLogin(),
    ])
}