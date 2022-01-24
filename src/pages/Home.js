import { Container, Stack, Typography, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MainLayout, HomeSearch, VehicleCard, MyCarousel } from '../components';
import { useVehicle } from '../hooks';

export default function Home() {

  let navigate = useNavigate();
  const { vehicle: { vehicleItems: vehicles } } = useVehicle();

  const onSearch = () => {
    console.log('Searching!!!');
    navigate('/bookvehicle');
  };

  return (
    <>
      <MainLayout>
        <Container maxWidth='lg' sx={{ pt: 4 }}>
          <Typography
            color='secondary'
            variant='h5'
            gutterBottom
          >Find and compare the best car rental deal</Typography>
          <HomeSearch sx={{ mt: 2 }} onSearch={onSearch} />
          <Divider sx={{ mt: 4 }} />
          <Stack
            mt={4}
            spacing={2}
          >
            <Typography
              color='primary'
              variant='h5'
              underline="always"
              sx={{ fontWeight: 'bold', textAlign: 'center' }}
              gutterBottom
            >
              Featured Vehicles
            </Typography>

            <MyCarousel>
              {
                vehicles.map((vehicle, i) => <VehicleCard key={i} vehicle={vehicle} sx={{ m: 1 }} />)
              }
            </MyCarousel>
          </Stack>
        </Container>
      </MainLayout>
    </>
  )
};
