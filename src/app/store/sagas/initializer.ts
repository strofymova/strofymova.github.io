import { takeEvery } from 'redux-saga/effects';
import { initializedActions } from '../initialized';
import { getToken } from './token';
import { getBasket } from './basket';

export function* initializerSaga() {
  yield takeEvery(initializedActions.init().type, getToken);
  yield takeEvery(initializedActions.init().type, getBasket);
}
