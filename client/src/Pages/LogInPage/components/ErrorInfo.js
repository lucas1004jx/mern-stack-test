import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';

import useStyles from './Components.styles';

const ErrorInfo = ({ type }) => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);

  const { signInError, signUpError } = user;
  if (!signInError && !signUpError) return <div />;
  return (
    <div className={classes.errorWrapper}>
      {type === 'signIn' && signInError && <Typography variant="body1">{signInError}</Typography>}
      {type === 'signUp' && signUpError && <Typography variant="body1">{signUpError}</Typography>}
    </div>
  );
};

ErrorInfo.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ErrorInfo;
