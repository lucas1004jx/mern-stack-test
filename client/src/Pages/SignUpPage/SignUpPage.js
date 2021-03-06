import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelectedState } from 'hooks';
import { Paper, Typography, Button } from '@material-ui/core';
import SignUpForm from './components/SignUpForm';

import useStyles from './SignUpPage.styles';

const SignUpPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { authenticated } = useSelectedState('auth');
  useEffect(() => {
    if (authenticated) {
      history.push('/login');
    }
  }, [authenticated]);
  return (
    <div className={classes.root}>
      <Paper className={classes.formWrapper}>
        <div className={classes.title}>
          <img src="images/logo.svg" alt="logo" />
          <Typography variant="h6">Sign Up</Typography>
        </div>
        <SignUpForm />
        <div className={classes.signIn}>
          <Button onClick={() => history.push('/login')} color="secondary">Already registed? sign in</Button>
        </div>

      </Paper>
    </div>
  );
};

export default SignUpPage;
