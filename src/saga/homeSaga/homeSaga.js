import { put, takeLatest } from 'redux-saga/effects';

import homeAction from './../../action/home/homeAction';
import { GET_SEARCH_LIST } from './../../action/home/homeAction';

import { PLANET_URL } from './../../constant/constant';

export function* getSearchList(action) {
  const { name } = action.payload;
  const url = `${PLANET_URL}?search=${name}`;
  try {
    const { results } = yield fetch(url).then(response => response.json());
    yield put(homeAction.setSearchList({ list: results, date: new Date() }));
  } catch (e) {
    yield put(homeAction.setError('Internal server error'));
  }
}

function* watchHomeSaga() {
  yield takeLatest(GET_SEARCH_LIST, getSearchList);
}

export default watchHomeSaga;
