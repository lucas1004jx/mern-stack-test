import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useSelectedState } from 'hooks';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { userLogOut } from 'util/Actions/AuthActions';
import { Typography, Link, Button } from '@material-ui/core';

const Navbar = ({ history }) => {
  const dispatch = useDispatch();
  const { authenticated } = useSelectedState('auth');
  console.log('authenticated', authenticated);

  const handleLogOut = () => dispatch(userLogOut(history));
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">
          <Link href="/" className="text-white">Home</Link>
        </Typography>
        { authenticated
          ? (
            <div>
              <Button href="/postList">Posts</Button>
              <Button onClick={handleLogOut}>Log out</Button>
            </div>
          )
          : (
            <div>
              <Button href="/login">sign in</Button>
              <Button href="/signup">sign up</Button>
            </div>
          )}

      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Navbar);
