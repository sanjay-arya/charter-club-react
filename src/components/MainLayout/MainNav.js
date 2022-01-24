import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  ManageAccounts as ManageAccountsIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';
import DrawerMenu from './DrawerMenu';
import { useUser } from "../../hooks"
export default function MainNav() {

  let navigate = useNavigate();

  const { user: { currentUser }, signOut } = useUser();

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            sx={{ display: { sx: 'none', sm: 'block' } }}
          >
            Charter Club
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <DrawerMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
};
