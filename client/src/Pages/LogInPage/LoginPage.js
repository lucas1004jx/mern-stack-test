import React from 'react';
import { Paper } from '@material-ui/core';
import Tabs from 'Components/Tabs/Tabs';
import { useGetUser, useSelectedState } from 'hooks';
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

  const user = useGetUser();

  const ui = useSelectedState('ui');
  const state = useSelectedState();

  console.log('LoginPage state', state);

  if (ui.loading) return <div>laoding</div>;

  if (user.isAuthenticated) {
    return (
      <div>
        {`Hello, ${user.email}`}
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.formWrapper}>
        <Tabs tabs={tabs} />
      </Paper>
    </div>
  );
};

export default LoginPage;
