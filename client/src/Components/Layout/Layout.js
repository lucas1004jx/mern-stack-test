import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'Components/Nav/Navbar';

import useStyles from './Layout.styles';

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.mainContent}>
        {children}
      </div>

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
