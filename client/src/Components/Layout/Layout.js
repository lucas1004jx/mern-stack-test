import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'Components/Nav/Navbar';
import { Grid } from '@material-ui/core';

import useStyles from './Layout.styles';

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.mainContent}>
          {children}
        </Grid>
      </Grid>
    </div>

  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: <></>,
};

export default Layout;
