import React from 'react';
import { Paper } from '@material-ui/core';
import LoginForm from './components/LoginForm';

import useStyles from './LoginPage.styles';

const LoginPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.formWrapper}>
        <LoginForm type="signIn" />
      </Paper>
    </div>
  );
};

export default LoginPage;
