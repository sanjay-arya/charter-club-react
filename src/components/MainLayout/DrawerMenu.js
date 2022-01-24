import { useState } from "react";
import { Drawer, Button, IconButton } from "@mui/material";
import {
  Menu as MenuIcon,
  ManageAccounts as ManageAccountsIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useUser } from "../../hooks";

export default function DrawerMenu() {
  let navigate = useNavigate();

  const [openDrawer, setOpenDrawer] = useState(false);
  const { user: { currentUser }, signOut } = useUser();

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
      >
        <Button color='inherit' to='/' component={RouterLink}>
          Home
        </Button>
        <Button color='inherit' to='/bookvehicle' component={RouterLink}>
          Book Vehicle
        </Button>
        {
          (currentUser && currentUser.isAdmin) &&
          <>
            <Button color='inherit' to='/inventory' component={RouterLink}>
              Inventory
            </Button>
            <Button color='inherit' to='/booking' component={RouterLink}>
              Booking
            </Button>
          </>
        }
        {currentUser ?
          <>
            <Button color='inherit' to='/profile' component={RouterLink} startIcon={<ManageAccountsIcon />}>
              {currentUser.displayName}
            </Button>

            <Button color='inherit' startIcon={<LogoutIcon />}
              onClick={() => {
                signOut();
                navigate('/', { replace: true });
              }}>
              Logout
            </Button>
          </>
          :
          <Button color='inherit' to='/signin' component={RouterLink}>
            Sign In
          </Button>
        }

      </Drawer>
    </>
  );
};
