import React from 'react';
import { connect } from 'react-redux';

import Home from './../component/home/Home';
import homeActions from '../action/home/homeAction';

const HomeContainer = props => <Home {...props} />;

const mapStateToProps = ({ home, auth }) => ({
  searchList: home.searchList,
  loader: home.loader,
  error: home.error,
  selectedItem: home.selectedItem,
  searchCounter: home.searchCounter,
  username: auth.username
});

export default connect(
  mapStateToProps,
  homeActions
)(HomeContainer);
