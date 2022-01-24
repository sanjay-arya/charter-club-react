import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Container, TextField, Typography, Grid, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

export default function SignIn({ onSignIn }) {

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
    };

    if (onSignIn && typeof onSignIn === 'function') {
      onSignIn(data);
    }
  };

  return (
    <Container maxWidth='xs'>
      {/* <CssBaseline /> */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1 }}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">
          SignIn
        </Typography>
        <Box component='form' onSubmit={onSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 2, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link component={RouterLink} to="/register" variant="body2">
                Become Dispatcher
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="/register" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
};
