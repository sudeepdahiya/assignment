import {
  SET_LOGIN,
  SET_ERROR,
  SET_LOADER
} from './../../action/login/loginAction';

const initialState = {
  login: true,
  username: '',
  error: '',
  loader: false
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        login: action.payload.login,
        username: action.payload.username
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload.message
      };
    case SET_LOADER:
      return {
        ...state,
        loader: action.payload.loader
      };
    default:
      return state;
  }
}

export default loginReducer;
