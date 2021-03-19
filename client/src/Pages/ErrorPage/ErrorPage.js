import React from 'react';
import PropTypes from 'prop-types';

const ErrorPage = ({ status }) => {
  const getMessage = (statusCode) => {
    switch (statusCode) {
      case 404:
        return 'PAGE NOT FOUND';

      case 500:
        return 'SERVER ERROR';

      default:
        return 'UnKnown Error';
    }
  };
  return (
    <div>{getMessage(status)}</div>
  );
};

ErrorPage.propTypes = {
  status: PropTypes.number,
};

ErrorPage.defaultProps = {
  status: 500,
};

export default ErrorPage;
