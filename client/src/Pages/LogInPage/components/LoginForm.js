import React, { useState } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  TextField, Button,
} from '@material-ui/core';

import { userSignIn } from 'util/Actions/AuthActions';
import ErrorInfo from 'Components/ErrorInfo/ErrorInfo';
import useStyles from './Components.styles';

const LoginForm = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => dispatch(userSignIn({ email, password }, history));

  const handleSetPassword = (e) => setPassword(e.target.value);

  const handleSetEmail = (e) => setEmail(e.target.value);

  return (
    <>
      <ErrorInfo type="signIn" />
      <div className={classes.inputArea}>
        <TextField required id="standard-required" label="EMAIL" defaultValue="" className={classes.input} onChange={handleSetEmail} />
        <TextField
          required
          id="standard-password-input"
          label="PASSWORD"
          type="password"
          autoComplete="current-password"
          className={classes.input}
          onChange={handleSetPassword}
        />

      </div>

      <div className={classes.buttonWrapper}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSignIn}
        >
          SUBMIT
        </Button>
      </div>

    </>
  );
};

LoginForm.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(LoginForm);
