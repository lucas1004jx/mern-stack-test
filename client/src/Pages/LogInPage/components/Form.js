import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField, Button,
} from '@material-ui/core';
import useStyles from './Components.styles';

const Form = ({ type }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.inputArea}>
        <TextField required id="standard-required" label="EMAIL" defaultValue="" className={classes.input} />
        <TextField
          required
          id="standard-password-input"
          label="PASSWORD"
          type="password"
          autoComplete="current-password"
          className={classes.input}
        />
        {type === 'signUp' && (
        <TextField
          required
          id="standard-password-input"
          label="CONFIRM PASSWORD"
          type="password"
          autoComplete="current-password"
          className={classes.input}
        />
        )}
      </div>
      {type === 'signIn' && (
      <div className={classes.buttonWrapper}>
        <Button variant="contained" color="primary" className={classes.button}>SUBMIT</Button>
        <Button size="small" color="secondary" className={classes.button}>forget password</Button>

      </div>
      )}

      {type === 'signUp' && (
      <div className={classes.buttonWrapper}>
        <Button variant="contained" color="primary" className={classes.button}>Create Account</Button>
      </div>
      )}

    </>
  );
};

Form.propTypes = {
  type: PropTypes.oneOf(['signIn', 'signUp']).isRequired,
};

export default Form;
