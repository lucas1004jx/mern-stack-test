import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';

import useStyles from './Components.styles';

const ErrorInfo = ({ type }) => {
  const classes = useStyles();
  const ui = useSelector((state) => state.ui);

  const { signInError, signUpError } = ui;

  const displayMessage = (messages) => (Array.isArray(messages)
    ? messages.map((msg) => (
      <Typography
        variant="body1"
        key={msg}
        className={classes.errorMsg}
      >
        {msg}
      </Typography>
    ))
    : (
      <Typography
        variant="body1"
        className={classes.errorMsg}
      >
        {messages}
      </Typography>
    ));

  if (!signInError && !signUpError) return <div />;

  return (
    <div className={classes.errorWrapper}>
      {type === 'signIn' && signInError && displayMessage(signInError)}
      {type === 'signUp' && signUpError && displayMessage(signUpError)}
    </div>
  );
};

ErrorInfo.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ErrorInfo;
