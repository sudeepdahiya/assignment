import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Error from './../error/Error';

import loginAction from './../../action/login/loginAction';

import './login.scss';

const Login = props => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('Luke Skywalker');
  const [password, setPassword] = useState('19BBY');

  /**
   * @description call login detail sagas for auth
   */
  const onSubmit = e => {
    e.preventDefault();
    dispatch(loginAction.getLoginDetail({ username, password }));
  };

  const { loader, error } = props;
  return (
    <div className="container login">
      <div className="formContainer">
        {error && <Error error={error} />}
        <form onSubmit={onSubmit}>
          <div className="row">
            <h2>Login Form</h2>
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Username"
              required
              className="form-control"
              disabled={loader}
              defaultValue={username}
              value={username}
              onChange={e => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="row">
            <input
              type="password"
              placeholder="Password"
              required
              className="form-control"
              disabled={loader}
              defaultValue={password}
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="row">
            <input
              type="submit"
              value={loader ? 'loading...' : 'Login'}
              className="btn btn-primary"
              disabled={loader}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Login.defaultProps = {
  loader: false
};

Login.propTypes = {
  loader: PropTypes.bool,
  error: PropTypes.string.isRequired
};

export default Login;
