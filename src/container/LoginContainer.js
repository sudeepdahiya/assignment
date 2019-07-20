import React from 'react';
import { connect } from 'react-redux';

import Login from './../component/login/Login';

import mapDispatchToProps from './../action/login/loginAction';

const LoginModule = props => {
  return <Login {...props} />;
};

const mapStateToProps = ({ auth }) => ({
  error: auth.error,
  loader: auth.loader
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModule);
