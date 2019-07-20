import React from 'react';
import { connect } from 'react-redux';

import mapDispatchToProps from './../../action/login/loginAction';

import './header.scss';

const Header = props => {
  const { login, setLogin } = props;
  if (!login) {
    return null;
  }
  return (
    <header className="container header">
      <div className="row">
        <div className="col-sm-2" />
        <div className="col-sm-6">
          <h3>Planet Detail</h3>
        </div>
        <div className="col-sm-4">
          <input
            type="button"
            value={'Logout'}
            className="btn btn-primary"
            onClick={() => {
              setLogin({ login: false, username: '' });
            }}
          />
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ({ auth }) => ({
  login: auth.login
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
