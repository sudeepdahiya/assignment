import { call, put, takeLatest } from 'redux-saga/effects';

import homeAction from './../../action/home/homeAction';
import { GET_SEARCH_LIST } from './../../action/home/homeAction';

import { PLANET_URL } from './../../constant/constant';

function* getLoginDetail(action) {
  const { name } = action.payload;
  const url = `${PLANET_URL}?search=${name}`;
  try {
    const response = yield call(fetch, url);

    const { results } = yield call([response, response.json]);
    yield put(homeAction.setSearchList({ list: results, date: new Date() }));
  } catch (e) {
    yield put(homeAction.setError('Internal Server error'));
  }
}

function* watchLoginSaga() {
  yield takeLatest(GET_SEARCH_LIST, getLoginDetail);
}

export default watchLoginSaga;
