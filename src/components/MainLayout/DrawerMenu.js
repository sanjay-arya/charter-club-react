import { useState } from "react";
import { Drawer, Button, IconButton } from "@mui/material";
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export default function DrawerMenu() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => { setOpenDrawer(!openDrawer) }}
      // sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor='right'
        open={openDrawer}
        onClose={() => { setOpenDrawer(false) }}
        onOpen={() => { setOpenDrawer(true) }}
      >
        <Button color='inherit' to='/' component={RouterLink}>
          Home
        </Button>
        <Button color='inherit' to='/signup' component={RouterLink}>
          Become Dispatcher
        </Button>
        <Button color='inherit' to='/bookcar' component={RouterLink}>
          Book Car
        </Button>
        <Button color='inherit' to='/about' component={RouterLink}>
          About
        </Button>
        <Button color='inherit' to='/contact' component={RouterLink}>
          Contact
        </Button>
        <Button color='inherit' to='/signin' component={RouterLink}>
          Sign In
        </Button>
      </Drawer>
    </>
  );
};
