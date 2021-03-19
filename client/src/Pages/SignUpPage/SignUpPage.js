import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelectedState } from 'hooks';
import { Paper } from '@material-ui/core';
import SignUpForm from './components/SignUpForm';

import useStyles from './SignUpPage.styles';

const SignUpPage = () => {
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
        <SignUpForm />
      </Paper>
    </div>
  );
};

export default SignUpPage;
