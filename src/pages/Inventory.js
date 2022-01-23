import { Container, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { MainLayout, VehicleInventory } from '../components';
import { useVehicle } from '../hooks';

export default function Inventory() {

  const { vehicle: { vehicleItems: vehicles } } = useVehicle();

  return (
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
                vehicles.map((vehicle) => (
                  <VehicleInventory key={vehicle.id} vehicle={vehicle} />
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>

      </Container>
    </MainLayout>
  )
};
