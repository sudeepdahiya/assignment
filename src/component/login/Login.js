import React from 'react';
import PropTypes from 'prop-types';

import Error from './../error/Error';

import './login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = { username: '', password: '' };
  }

  /**
   * @description Change username and password
   */
  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  /**
   * @description call login detail sagas for auth
   */
  onSubmit = e => {
    e.preventDefault();
    const { getLoginDetail } = this.props;
    getLoginDetail(this.state);
  };

  render() {
    const { loader, error } = this.props;
    return (
      <div className="container login">
        <div className="formContainer">
          {error && <Error error={error} />}
          <form ref={this.form} onSubmit={this.onSubmit}>
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
                onChange={e => {
                  this.handleChange('username', e.target.value);
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
                onChange={e => {
                  this.handleChange('password', e.target.value);
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
  }
}

Login.defaultProps = {
  loader: false
};

Login.propTypes = {
  loader: PropTypes.bool,
  error: PropTypes.string.isRequired
};

export default Login;
