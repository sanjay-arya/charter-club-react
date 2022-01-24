import { Avatar, Box, Button, Container, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import {
  AssignmentInd as AssignmentIndIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon
} from '@mui/icons-material';
import { MainLayout } from '../components';
import { useUser } from '../hooks';
import { useState } from 'react';

export default function Profile() {

  const { user: { currentUser }, updateUser } = useUser();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      displayName: formData.get('displayName'),
      password: formData.get('password'),
    };
    updateUser({ ...currentUser, ...data });
  }

  return (
    <>
      <MainLayout>
        <Container maxWidth='xs' sx={{ pt: 4 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1 }}>
              <AssignmentIndIcon />
            </Avatar>
            <Typography variant='h5'>
              Profile
            </Typography>
            <Box component='form' onSubmit={onSubmit}>
              <TextField
                margin='normal'
                required
                fullWidth
                defaultValue={currentUser.displayName}
                name='displayName'
                label='Display Name'
                id='displayName'
              />
              <TextField
                margin='normal'
                fullWidth
                defaultValue={currentUser.username}
                id='username'
                label='Username'
                name='username'
                autoComplete='username'
                disabled
                autoFocus
              />

              <TextField
                margin='normal'
                required
                fullWidth
                defaultValue={currentUser.username}
                name='password'
                label='Password'
                type={showPassword ? 'text' : 'password'}
                id='password'
                autoComplete='current-password'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                        onMouseDown={(event) => {
                          event.preventDefault();
                        }}
                        edge='end'
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 2, mb: 2 }}
              >
                Update Profile
              </Button>
            </Box>
          </Box>
        </Container>
      </MainLayout >
    </>
  );
};