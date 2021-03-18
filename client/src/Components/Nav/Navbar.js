import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { Typography, Link, Button } from '@material-ui/core';

function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">
          <Link href="/" className="text-white">Home</Link>
        </Typography>
        <Button href="/login">sign in</Button>
        <Button href="/signup">sign up</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
