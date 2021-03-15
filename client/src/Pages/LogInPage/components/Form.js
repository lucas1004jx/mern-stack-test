import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  TextField, Button,
} from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { signIn, signUp } from 'util/Actions/UserActions';
import useStyles from './Components.styles';

const Form = ({ type }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setComfirmedPassword] = useState('');

  const handleSignUp = () => dispatch(signUp({ email, password, confirmedPassword }));
  const handleSignIn = () => dispatch(signIn({ email, password }));

  const handleSetPassword = (e) => setPassword(e.target.value);
  const handleComfirmPassword = (e) => setComfirmedPassword(e.target.value);
  const handleSetEmail = (e) => setEmail(e.target.value);

  return (
    <>
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
        {type === 'signUp' && (
        <TextField
          required
          id="standard-password-input"
          label="CONFIRM PASSWORD"
          type="password"
          autoComplete="current-password"
          className={classes.input}
          onChange={handleComfirmPassword}
        />
        )}
      </div>
      {type === 'signIn' && (
      <div className={classes.buttonWrapper}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSignIn}
        >
          SUBMIT
        </Button>
        <Button size="small" color="secondary" className={classes.button}>forget password</Button>

      </div>
      )}

      {type === 'signUp' && (
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
      )}

    </>
  );
};

Form.propTypes = {
  type: PropTypes.oneOf(['signIn', 'signUp']).isRequired,
};

export default Form;
