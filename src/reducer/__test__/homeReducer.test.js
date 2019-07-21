import Actions, {
  GET_SEARCH_LIST,
  SET_SEARCH_LIST,
  SET_SELECTED_ITEM,
  SET_HOME_ERROR
} from './../../action/home/homeAction';

import reducer from './../home/homeReducer';

describe('actions', () => {
  it('GET_SEARCH_LIST action', () => {
    const name = 'sudeep';
    const expectedAction = {
      type: GET_SEARCH_LIST,
      payload: { name }
    };
    expect(Actions.getSearchList(name)).toEqual(expectedAction);
  });

  it('SET_SEARCH_LIST action', () => {
    const list = [{ a: 'a', b: 'b' }];
    const date = new Date();
    const expectedAction = {
      type: SET_SEARCH_LIST,
      payload: { list, date }
    };
    expect(Actions.setSearchList({ list, date })).toEqual(expectedAction);
  });

  it('SET_HOME_ERROR action', () => {
    const message = 'error';
    const expectedAction = {
      type: SET_HOME_ERROR,
      payload: { message }
    };
    expect(Actions.setError(message)).toEqual(expectedAction);
  });

  it('SET_SELECTED_ITEM action', () => {
    const item = { a: 'a', b: 'b' };
    const expectedAction = {
      type: SET_SELECTED_ITEM,
      payload: { item }
    };
    expect(Actions.setSelectedItem(item)).toEqual(expectedAction);
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      searchList: [],
      loader: false,
      selectedItem: {},
      searchCounter: []
    });
  });

  it('should handle GET_SEARCH_LIST', () => {
    const list = [{ a: 'a', b: 'b' }];
    expect(
      reducer(
        {},
        {
          type: GET_SEARCH_LIST,
          payload: { list }
        }
      )
    ).toEqual({
      loader: true
    });

    expect(
      reducer(
        {
          list: [{ a: 'a', b: 'b' }],
          loader: false
        },
        {
          type: GET_SEARCH_LIST,
          payload: { list }
        }
      )
    ).toEqual({
      list: [{ a: 'a', b: 'b' }],
      loader: true
    });
  });

  it('should handle SET_SELECTED_ITEM', () => {
    const item = { a: 'a' };
    expect(
      reducer(
        {},
        {
          type: SET_SELECTED_ITEM,
          payload: { item }
        }
      )
    ).toEqual({
      selectedItem: item
    });

    expect(
      reducer(
        {
          selectedItem: { b: 'b' }
        },
        {
          type: SET_SELECTED_ITEM,
          payload: { item }
        }
      )
    ).toEqual({
      selectedItem: item
    });
  });

  it('should handle SET_HOME_ERROR', () => {
    const message = 'this is an error';
    expect(
      reducer(
        {},
        {
          type: SET_HOME_ERROR,
          payload: { message }
        }
      )
    ).toEqual({
      error: message,
      loader: false
    });

    expect(
      reducer(
        { error: '', loader: true },
        {
          type: SET_HOME_ERROR,
          payload: { message }
        }
      )
    ).toEqual({
      error: message,
      loader: false
    });
  });

  it('should handle SET_SEARCH_LIST', () => {
    const list = [{ a: 'a' }, { b: 'b' }];
    const date = new Date();
    expect(
      reducer(
        { searchCounter: [], loader: false },
        {
          type: SET_SEARCH_LIST,
          payload: { list, date }
        }
      )
    ).toEqual({
      searchList: list,
      loader: false,
      searchCounter: [date]
    });
    var oldDate = new Date(date.getTime() - 1000 * 60 - 15);
    expect(
      reducer(
        { searchCounter: [oldDate], loader: false },
        {
          type: SET_SEARCH_LIST,
          payload: { list, date }
        }
      )
    ).toEqual({
      searchList: list,
      loader: false,
      searchCounter: [date]
    });
  });
});
