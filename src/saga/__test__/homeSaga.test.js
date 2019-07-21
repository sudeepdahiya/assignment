import { takeLatest } from 'redux-saga/effects';
import watchHomeSaga, { getSearchList } from './../homeSaga/homeSaga';

describe('SAGAS: home', () => {
  it('reducer action', () => {
    const generator = watchHomeSaga();
    expect(generator.next().value).toEqual(
      takeLatest('GET_SEARCH_LIST', getSearchList)
    );
    expect(generator.next().done).toBeTruthy();
  });
});
