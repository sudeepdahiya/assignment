export const GET_SEARCH_LIST = 'GET_SEARCH_LIST';
export const SET_SEARCH_LIST = 'SET_SEARCH_LIST';
export const SET_SELECTED_ITEM = 'SET_SELECTED_ITEM';
export const SET_HOME_ERROR = 'SET_HOME_ERROR';

const getSearchList = name => ({
  type: GET_SEARCH_LIST,
  payload: { name }
});

const setSearchList = list => ({
  type: SET_SEARCH_LIST,
  payload: { list }
});

const setSelectedItem = item => ({
  type: SET_SELECTED_ITEM,
  payload: { item }
});

const setError = message => ({
  type: SET_HOME_ERROR,
  payload: { message }
});

export default { getSearchList, setSearchList, setSelectedItem, setError };
