import { Container } from "@mui/material";
import { MainLayout } from '../components';
import { useUser } from '../hooks';

export default function Profile() {

  const { user: { currentUser }, updateUser } = useUser();

  return (
    <>
      <MainLayout>
        <Container maxWidth='lg' sx={{ pt: 4 }}>
          {currentUser.displayName === 'Sanjay Arya' ? JSON.stringify(currentUser) : updateUser({ ...currentUser, displayName: 'Sanjay Arya' })}
        </Container>
      </MainLayout >
    </>
  );
};