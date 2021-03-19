import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelectedState } from 'hooks';

const PrivateRoute = ({ children, ...rest }) => {
  const { authenticated } = useSelectedState('auth');
  return <Route {...rest} render={() => (authenticated ? children : <Redirect to="/login" />)} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

PrivateRoute.defaultProps = {
  children: () => <></>,
};

export default PrivateRoute;
