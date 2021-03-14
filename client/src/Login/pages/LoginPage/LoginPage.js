import React from 'react';
import {
  TextField, Paper, Typography, Button,
} from '@material-ui/core';

import useStyles from './LoginPage.styles';

const userNameLabel = 'USER NAME';
const passwordLabel = 'PASSWORD';

const LoginPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper>
        <Typography>sign in</Typography>
        <Typography>sign up</Typography>
        alaya icon
        <TextField required id="standard-required" label={userNameLabel} defaultValue="" />
        <TextField
          required
          id="standard-password-input"
          label={passwordLabel}
          type="password"
          autoComplete="current-password"
        />
        <Button>log in</Button>
        <Typography>forget password</Typography>
      </Paper>

    </div>
  );
};

export default LoginPage;
