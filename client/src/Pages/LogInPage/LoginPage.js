import React from 'react';
import { useSelector } from 'react-redux';
import { Paper } from '@material-ui/core';

import Tabs from 'Components/Tabs/Tabs';
import Form from './components/Form';

import useStyles from './LoginPage.styles';

const tabs = [
  {
    label: 'SIGN IN',
    element: <Form type="signIn" />,
  },
  {
    label: 'SIGN UP',
    element: <Form type="signUp" />,
  },
];

const LoginPage = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  console.log('LoginPage user', user);

  return (
    <div className={classes.root}>
      <Paper className={classes.formWrapper}>
        <Tabs tabs={tabs} />
      </Paper>
    </div>
  );
};

export default LoginPage;
