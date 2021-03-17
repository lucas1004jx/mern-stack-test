import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  TextField, Button,
} from '@material-ui/core';

import { userSignIn, userSignUp } from 'util/Actions/UiActions';
import ErrorInfo from './ErrorInfo';
import useStyles from './Components.styles';

const Form = ({ type }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setComfirmedPassword] = useState('');

  const props = useSelector((state) => state);
  const { redirectUrl } = useSelector((state) => state.ui);
  console.log('props----', props);

  const handleSignUp = () => dispatch(userSignUp({ email, password, confirmedPassword }));
  const handleSignIn = () => dispatch(userSignIn({ email, password }));

  const handleSetPassword = (e) => setPassword(e.target.value);
  const handleComfirmPassword = (e) => setComfirmedPassword(e.target.value);
  const handleSetEmail = (e) => setEmail(e.target.value);
  console.log('redicretUrl', redirectUrl);
  if (redirectUrl) return <Redirect to={redirectUrl} />;

  return (
    <>
      <ErrorInfo type={type} />
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
