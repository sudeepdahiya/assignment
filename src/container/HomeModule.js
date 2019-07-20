import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';

import HomeContainer from './HomeContainer';
import { getHomeModule } from './../reducer/reducerModule';

const HomeModule = () => (
  <DynamicModuleLoader modules={[getHomeModule()]}>
    <HomeContainer />
  </DynamicModuleLoader>
);

export default HomeModule;
