import { Container } from "@mui/material";
import { MainLayout } from '../components';
import { useUser } from '../hooks';

export default function Profile() {

  const { user: { currentUser } } = useUser();

  return (
    <>
      <MainLayout>
        <Container maxWidth='lg' sx={{ pt: 4 }}>
          {JSON.stringify(currentUser)};
        </Container>
      </MainLayout >
    </>
  );
};