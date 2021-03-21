import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  TextField, Button,
} from '@material-ui/core';

import { userSignUp } from 'util/Actions/AuthActions';
import ErrorInfo from 'Components/ErrorInfo/ErrorInfo';
import useStyles from './Components.styles';

const SignUpForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputValue, setInputValue] = useState({});

  const handleChange = (evt) => {
    const { value } = evt.target;
    setInputValue({
      ...inputValue,
      [evt.target.name]: value,
    });
  };

  const handleSignUp = () => dispatch(userSignUp(inputValue, history));

  return (
    <>
      <ErrorInfo type="signUp" />
      <div className={classes.inputArea}>
        <TextField required id="standard-required" label="USER NAME" name="userName" defaultValue="" className={classes.input} onChange={handleChange} />
        <TextField required id="standard-required" label="EMAIL" name="email" defaultValue="" className={classes.input} onChange={handleChange} />
        <TextField
          required
          id="standard-password-input"
          label="PASSWORD"
          name="password"
          type="password"
          autoComplete="current-password"
          className={classes.input}
          onChange={handleChange}
        />

        <TextField
          required
          id="standard-password-input"
          label="CONFIRM PASSWORD"
          name="confirmedPassword"
          type="password"
          autoComplete="current-password"
          className={classes.input}
          onChange={handleChange}
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

export default SignUpForm;
