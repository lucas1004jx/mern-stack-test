import React from 'react';
import { Paper } from '@material-ui/core';
import SignUpForm from './components/SignUpForm';

import useStyles from './SignUpPage.styles';

const SignUpPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.formWrapper}>
        <SignUpForm />
      </Paper>
    </div>
  );
};

export default SignUpPage;
