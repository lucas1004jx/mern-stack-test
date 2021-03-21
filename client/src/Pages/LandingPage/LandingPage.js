import React from 'react';
import { useHistory } from 'react-router-dom';

import { useFetchUser, useSelectedState } from 'hooks';
import { Typography, Button } from '@material-ui/core';
import useStyles from './LandingPage.styles';

const LandingPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const user = useFetchUser();
  const ui = useSelectedState('ui');
  const { authenticated } = useSelectedState('auth');

  if (ui.loading) return <div>loading</div>;
  return (
    <div className={classes.root}>

      <Typography variant="h4" className={classes.title}>
        {` Welcom to Alaya blog ${user.userName ?? ''}`}
      </Typography>
      <div className={classes.buttonWrapper}>
        {authenticated ? (
          <Button variant="contained" color="secondary" className={classes.button} onClick={() => history.push('/postList')}>My Posts</Button>
        ) : (
          <>
            <Button variant="contained" className={classes.button} onClick={() => history.push('/login')} color="primary">sign in</Button>
            <Button variant="contained" className={classes.button} onClick={() => history.push('/signup')} color="secondary">sign up</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
