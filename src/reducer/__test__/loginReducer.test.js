import Actions, {
  SET_LOGIN,
  GET_LOGIN_DETAIL,
  SET_ERROR,
  SET_LOADER
} from './../../action/login/loginAction';

import reducer from './../login/loginReducer';

describe('actions', () => {
  it('setLogin reducer action', () => {
    const login = true;
    const username = 'sudeep';
    const expectedAction = {
      type: SET_LOGIN,
      payload: { login, username }
    };
    expect(Actions.setLogin({ login, username })).toEqual(expectedAction);
  });
  it('set error reducer reducer action', () => {
    const message = 'this is error message';
    const expectedAction = {
      type: SET_ERROR,
      payload: { message }
    };
    expect(Actions.setError(message)).toEqual(expectedAction);
  });
  it('set loader reducer reducer action', () => {
    const loader = true;
    const expectedAction = {
      type: SET_LOADER,
      payload: { loader }
    };
    expect(Actions.setLoader(loader)).toEqual(expectedAction);
  });
  it('get login detail reducer action', () => {
    const password = 'test';
    const username = 'username';
    const expectedAction = {
      type: GET_LOGIN_DETAIL,
      payload: { password, username }
    };
    expect(Actions.getLoginDetail({ password, username })).toEqual(
      expectedAction
    );
  });
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      login: false,
      username: '',
      error: '',
      loader: false
    });
  });
  it('should handle SET_LOGIN', () => {
    expect(
      reducer(
        {},
        {
          type: SET_LOGIN,
          payload: { username: 'sudeep', login: true }
        }
      )
    ).toEqual({
      username: 'sudeep',
      login: true
    });

    expect(
      reducer(
        {
          username: 'sudeep',
          login: true
        },
        {
          type: SET_LOGIN,
          payload: { username: '', login: false }
        }
      )
    ).toEqual({
      username: '',
      login: false
    });
  });
  it('should handle SET_ERROR', () => {
    expect(
      reducer(
        {},
        {
          type: SET_ERROR,
          payload: { message: 'error' }
        }
      )
    ).toEqual({
      error: 'error'
    });

    expect(
      reducer(
        { error: 'error' },
        {
          type: SET_ERROR,
          payload: { message: '' }
        }
      )
    ).toEqual({
      error: ''
    });
  });
  it('should handle SET_LOADER', () => {
    expect(
      reducer(
        {},
        {
          type: SET_LOADER,
          payload: { loader: true }
        }
      )
    ).toEqual({
      loader: true
    });
    expect(
      reducer(
        { loader: true },
        {
          type: SET_LOADER,
          payload: { loader: false }
        }
      )
    ).toEqual({
      loader: false
    });
  });
});
