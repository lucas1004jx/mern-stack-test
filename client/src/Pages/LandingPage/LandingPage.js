import React from 'react';
import { useFetchUser, useSelectedState } from 'hooks';
import { Typography } from '@material-ui/core';
import useStyles from './LandingPage.styles';

const LandingPage = () => {
  const classes = useStyles();
  const user = useFetchUser();
  const ui = useSelectedState('ui');
  const { authenticated } = useSelectedState('auth');
  console.log('user--', user);
  if (ui.loading) return <div>loading</div>;
  return (
    <div className={classes.root}>
      <Typography>
        Welcom to Alaya blog
        {' '}
        {authenticated ? user.userName : 'please log in'}
      </Typography>
    </div>
  );
};

export default LandingPage;
