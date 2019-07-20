import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => {
  return (
    <div className="alert alert-danger error">
      <strong>Error!</strong> {error}
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.string.isRequired
};

export default Error;
