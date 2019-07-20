import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({
  component: Component,
  path,
  loginPage,
  loginStatus
}) => {
  if (loginPage === true && loginStatus) {
    return <Redirect to="/home" />;
  } else if (!loginPage && !loginStatus) {
    return <Redirect to="/" />;
  }
  return <Route path={path} exact component={Component} />;
};

const mapStateToProps = ({ auth }) => ({
  loginStatus: auth.login
});

export default connect(mapStateToProps)(PrivateRoutes);
