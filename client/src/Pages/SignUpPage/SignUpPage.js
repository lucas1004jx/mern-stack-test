import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelectedState } from 'hooks';
import { Paper } from '@material-ui/core';
import SignUpForm from './components/SignUpForm';

import useStyles from './SignUpPage.styles';

const LoginPage = () => {
  const classes = useStyles();
  const auth = useSelectedState('auth');
  if (auth.redirectUrl) return <Redirect to={auth.redirectUrl} />;
  return (
    <div className={classes.root}>
      <Paper className={classes.formWrapper}>
        <SignUpForm />
      </Paper>
    </div>
  );
};

export default LoginPage;
