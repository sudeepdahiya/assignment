import { put, takeLatest } from 'redux-saga/effects';

import loginAction, {
  GET_LOGIN_DETAIL
} from './../../action/login/loginAction';

import { PEOPLE_URL } from './../../constant/constant';

export function* getLoginDetail(action) {
  const { username, password } = action.payload;
  yield put(loginAction.setLoader(true));
  const url = `${PEOPLE_URL}?search=${username}`;
  try {
    const response = yield fetch(url).then(response => response.json());
    const { results } = response;
    if (
      results.length === 1 &&
      results[0].name === username &&
      results[0].birth_year === password
    ) {
      yield put(loginAction.setLogin({ login: true, username: username }));
      yield put(loginAction.setError(''));
    } else {
      yield put(loginAction.setError('Wrong Username and password'));
    }
  } catch (e) {
    yield put(loginAction.setError('Internal server error'));
  }
  yield put(loginAction.setLoader(false));
}

function* watchLoginSaga() {
  yield takeLatest(GET_LOGIN_DETAIL, getLoginDetail);
}

export default watchLoginSaga;
