import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Nav() {
  return (
      <AppBar className='header_nav' sx={{ bgcolor: "#a8dadc" }} position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}> Michael McLaughlin </Typography>
          <Button href='#education'  color="inherit">Education</Button>
          <Button href='#work' color="inherit">Previous jobs</Button>
          <Button href='#portfolio' color="inherit">Portfolio</Button>
          <Button href='#experience' color="inherit">Experience</Button>
          <Button href='#contact' color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
  );
}