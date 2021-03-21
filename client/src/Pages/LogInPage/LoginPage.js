import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Paper, Typography, Button } from '@material-ui/core';
import { useSelectedState } from 'hooks';
import LoginForm from './components/LoginForm';

import useStyles from './LoginPage.styles';

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { authenticated } = useSelectedState('auth');
  useEffect(() => {
    if (authenticated) {
      history.push('/');
    }
  }, [authenticated]);
  return (
    <div className={classes.root}>
      <Paper className={classes.formWrapper}>
        <div className={classes.title}>
          <img src="images/logo.svg" alt="logo" />
          <Typography variant="h6">Sign In</Typography>
        </div>
        <LoginForm type="signIn" />

        <div className={classes.signUp}>
          <Button onClick={() => history.push('/signup')} color="secondary">Need a account? sign up</Button>
        </div>
      </Paper>
    </div>
  );
};

export default LoginPage;
