import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelectedState } from 'hooks';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { userLogOut } from 'util/Actions/AuthActions';
import { Link, Button } from '@material-ui/core';
import useStyles from './Navbar.styles';

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { authenticated } = useSelectedState('auth');

  const handleLogOut = () => dispatch(userLogOut());

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.root}>
        <Link href="/">
          <img src="images/logo.svg" className={classes.logo} alt="logo" />
        </Link>

        <div className={classes.buttonWrapper}>
          <Button variant="contained" className={classes.button} onClick={() => history.push('/')}>Home</Button>
          { authenticated
            ? (
              <>
                <Button variant="contained" className={classes.button} onClick={() => history.push('/postList')}>Posts</Button>
                <Button variant="contained" className={classes.button} onClick={handleLogOut}>Log out</Button>
              </>
            )
            : (
              <>
                <Button variant="contained" className={classes.button} onClick={() => history.push('/login')}>sign in</Button>
                <Button variant="contained" className={classes.button} onClick={() => history.push('/signup')}>sign up</Button>
              </>
            )}

        </div>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
