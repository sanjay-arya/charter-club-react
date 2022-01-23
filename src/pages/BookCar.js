import { Container } from "@mui/material";
import { MainLayout, BookCarSearch } from '../components';
export default function BookCar() {

  const onSearch = (data) => {
    console.log(data);
  };

  return (
    <MainLayout>
      <Container maxWidth='lg' sx={{ pt: 4 }}>
        <BookCarSearch onSearch={onSearch} />

      </Container>
    </MainLayout>
  )
};