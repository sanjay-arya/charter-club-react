import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Container, CssBaseline, TextField, Typography, Grid, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

export default function SignIn(onSubmit) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    if (onSubmit && typeof onSubmit === 'function') {
      onSubmit(data);
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
        <Box component='form' onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
