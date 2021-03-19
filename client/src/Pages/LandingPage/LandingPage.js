import React from 'react';
import { useFetchUser, useSelectedState } from 'hooks';
import { Typography } from '@material-ui/core';
import useStyles from './LandingPage.styles';

const LandingPage = () => {
  const classes = useStyles();
  const user = useFetchUser();
  const ui = useSelectedState('ui');
  const state = useSelectedState();

  console.log('Landing state', state);
  if (ui.loading) return <div>loading</div>;
  return (
    <div className={classes.root}>
      <Typography>
        Welcom to Alaya post
        {' '}
        {user.email ?? ''}
      </Typography>
    </div>
  );
};

export default LandingPage;
