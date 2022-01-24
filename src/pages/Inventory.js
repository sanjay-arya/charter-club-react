import { Container, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { MainLayout, VehicleInventory } from '../components';
import { useVehicle, useUser } from '../hooks';

export default function Inventory() {

  const { vehicle: { vehicleItems: vehicles } } = useVehicle();
  const { user: { currentUser } } = useUser();

  return (
    <>
      <MainLayout>
        <Container maxWidth='lg' sx={{ pt: 4 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Title</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Available</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  vehicles.filter(vehicle => vehicle.ownerId === currentUser.id).map((vehicle) => (
                    <VehicleInventory key={vehicle.id} vehicle={vehicle} />
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>

        </Container>
      </MainLayout>
    </>
  )
};
