import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Paper } from '@material-ui/core';
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
        <LoginForm type="signIn" />
      </Paper>
    </div>
  );
};

export default LoginPage;
