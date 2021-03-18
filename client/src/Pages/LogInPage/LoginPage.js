import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelectedState } from 'hooks';
import { Paper } from '@material-ui/core';
import LoginForm from './components/LoginForm';

import useStyles from './LoginPage.styles';

const LoginPage = () => {
  const classes = useStyles();
  const auth = useSelectedState('auth');
  if (auth.redirectUrl) return <Redirect to={auth.redirectUrl} />;
  return (
    <div className={classes.root}>
      <Paper className={classes.formWrapper}>
        <LoginForm type="signIn" />
      </Paper>
    </div>
  );
};

export default LoginPage;
