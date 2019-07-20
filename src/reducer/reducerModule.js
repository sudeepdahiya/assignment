import loginReducer from './login/loginReducer';
import HomeReducer from './home/homeReducer';
import loginSaga from './../saga/loginSaga/loginSaga';
import homeSaga from './../saga/homeSaga/homeSaga';

const getLoginModule = () => {
  return {
    id: 'login',
    reducerMap: {
      auth: loginReducer
    },
    sagas: [loginSaga]
  };
};

const getHomeModule = () => {
  return {
    id: 'home',
    reducerMap: {
      home: HomeReducer
    },
    sagas: [homeSaga]
  };
};

export { getLoginModule, getHomeModule };
