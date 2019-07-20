import React, { Suspense, lazy } from 'react';
import { Switch, BrowserRouter, Redirect } from 'react-router-dom';

import PrivateRoutes from './PrivateRoutes';
import Header from '../component/header/Header';

const HomeLazy = lazy(() => import('../container/HomeModule'));
const LoginLazy = lazy(() => import('../container/LoginContainer'));

const FallBackLoader = () => <div>Loading...</div>;

const HomeSuspense = () => (
  <Suspense fallback={FallBackLoader}>
    <HomeLazy />
  </Suspense>
);

const LoginSuspense = () => (
  <Suspense fallback={FallBackLoader}>
    <LoginLazy />
  </Suspense>
);

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <PrivateRoutes
          requiredLogin={true}
          path="/home"
          component={HomeSuspense}
        />
        <PrivateRoutes loginPage={true} path="/" component={LoginSuspense} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
