import { put, takeLatest } from 'redux-saga/effects';
import watchLoginSaga, { getLoginDetail } from './../loginSaga/loginSaga';
import loginAction from './../../action/login/loginAction';

describe('SAGAS: login', () => {
  it('setLogin reducer action', () => {
    const generator = watchLoginSaga();
    expect(generator.next().value).toEqual(
      takeLatest('GET_LOGIN_DETAIL', getLoginDetail)
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('positive condition', () => {
    const username = 'sudeep';
    const password = '1989';
    const mockResponse = {
      results: [{ name: username, birth_year: password }]
    };
    const action = { payload: { username, password } };
    const generator = getLoginDetail(action);
    expect(generator.next().value).toEqual(put(loginAction.setLoader(true)));
    generator.next();

    expect(generator.next(mockResponse).value).toEqual(
      put(loginAction.setLogin({ login: true, username }))
    );
    expect(generator.next().value).toEqual(put(loginAction.setError('')));
    expect(generator.next().value).toEqual(put(loginAction.setLoader(false)));
    expect(generator.next().done).toBeTruthy();
  });

  it('multiple resoponse', () => {
    const username = 'sudeep';
    const password = '1989';
    const mockResponse = {
      results: [
        { name: username, birth_year: password },
        { name: 'sudeep dahiya', birth_year: '23223' }
      ]
    };
    const action = { payload: { username, password } };
    const generator = getLoginDetail(action);
    expect(generator.next().value).toEqual(put(loginAction.setLoader(true)));
    generator.next();
    expect(generator.next(mockResponse).value).toEqual(
      put(loginAction.setError('Wrong Username and password'))
    );
    expect(generator.next().value).toEqual(put(loginAction.setLoader(false)));
    expect(generator.next().done).toBeTruthy();
  });

  it('when no response', () => {
    const username = 'sudeep';
    const password = '1989';
    const mockResponse = {
      results: []
    };
    const action = { payload: { username, password } };
    const generator = getLoginDetail(action);
    expect(generator.next().value).toEqual(put(loginAction.setLoader(true)));
    generator.next();
    expect(generator.next(mockResponse).value).toEqual(
      put(loginAction.setError('Wrong Username and password'))
    );
    expect(generator.next().value).toEqual(put(loginAction.setLoader(false)));
    expect(generator.next().done).toBeTruthy();
  });
});
