import {
  SET_SEARCH_LIST,
  GET_SEARCH_LIST,
  SET_SELECTED_ITEM,
  SET_HOME_ERROR
} from './../../action/home/homeAction';

import { getMinutesBetweenDates } from './../../utils/function';

const initialState = {
  searchList: [],
  loader: false,
  selectedItem: {},
  searchCounter: []
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_LIST:
      // add counter if search is successful
      const searchCounter = [];
      for (let i = 0; i < state.searchCounter.length; i += 1) {
        // dont add older serach
        const timeDiff = getMinutesBetweenDates(
          state.searchCounter[i],
          action.payload.date
        );
        if (timeDiff < 1) {
          searchCounter.push(state.searchCounter[i]);
        }
      }
      return {
        ...state,
        searchList: action.payload.list,
        loader: false,
        searchCounter: [...searchCounter, action.payload.date]
      };
    case GET_SEARCH_LIST:
      return {
        ...state,
        loader: true
      };
    case SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: action.payload.item
      };
    case SET_HOME_ERROR:
      return {
        ...state,
        error: action.payload.message,
        loader: false
      };
    default:
      return state;
  }
}

export default homeReducer;
