import { AppBar, Toolbar, Box, Button, Typography, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import DrawerMenu from './DrawerMenu';

export default function MainNav() {

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
            <Button color='inherit' to='/bookcar' component={RouterLink}>
              Book Car
            </Button>
            <Button color='inherit' to='/signin' component={RouterLink}>
              Become Dispatcher
            </Button>
            <Button color='inherit' to='/inventory' component={RouterLink}>
              Inventory
            </Button>
            <Button color='inherit' to='/booking' component={RouterLink}>
              Booking
            </Button>
            <Button color='inherit' to='/signin' component={RouterLink}>
              Sign In
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <DrawerMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
};
