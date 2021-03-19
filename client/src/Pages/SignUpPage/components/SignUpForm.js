import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import {
  TextField, Button,
} from '@material-ui/core';

import { userSignUp } from 'util/Actions/AuthActions';
import ErrorInfo from 'Components/ErrorInfo/ErrorInfo';
import useStyles from './Components.styles';

const SignUpForm = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setComfirmedPassword] = useState('');

  const handleSignUp = () => dispatch(userSignUp({ email, password, confirmedPassword }, history));

  const handleSetPassword = (e) => setPassword(e.target.value);
  const handleComfirmPassword = (e) => setComfirmedPassword(e.target.value);
  const handleSetEmail = (e) => setEmail(e.target.value);

  return (
    <>
      <ErrorInfo type="signUp" />
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

        <TextField
          required
          id="standard-password-input"
          label="CONFIRM PASSWORD"
          type="password"
          autoComplete="current-password"
          className={classes.input}
          onChange={handleComfirmPassword}
        />

      </div>

      <div className={classes.buttonWrapper}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSignUp}
        >
          Create Account
        </Button>
      </div>

    </>
  );
};

SignUpForm.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(SignUpForm);
