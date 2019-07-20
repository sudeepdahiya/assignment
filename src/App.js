import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes/Routes';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import { createStore } from 'redux-dynamic-modules';

import { getLoginModule } from './reducer/reducerModule';

const store = createStore(
  /* initial state */
  { extensions: [getSagaExtension()] },

  /** enhancers **/
  [],

  /* extensions to include */
  [],

  getLoginModule()
  /* ...any additional modules */
);

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
