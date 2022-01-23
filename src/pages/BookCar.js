import { Container, Stack } from "@mui/material";
import { useState } from "react";
import { MainLayout, BookCarSearch, VehicleDetail } from '../components';
import { useVehicle } from "../hooks";

export default function BookCar() {

  const { vehicle: { vehicleItems: vehicles } } = useVehicle();
  const [searchVehicles, setSearchVehicles] = useState([]);
  const [searchData, setSearchData] = useState();

  const onSearch = (data) => {
    setSearchData(data);

    const filterVehicles = vehicles.filter(vehicle => {
      if (
        vehicle.passenger >= data.passenger &&
        vehicle.transmission === data.transmission &&
        vehicle.price >= data.price[0] && vehicle.price <= data.price[1]
      ) {
        return true;
      }
      return false;
    })

    setSearchVehicles(filterVehicles);
  };

  const onBook = (index) => {
    const booking = {
      fromLocation: searchData.fromLocation,
      toLocation: searchData.toLocation,
      startDate: searchData.startDate,
      endDate: searchData.endDate,
      vehicle: searchVehicles[index]
    }
    console.log(booking);
  }

  return (
    <MainLayout>
      <Container maxWidth='lg' sx={{ pt: 4 }}>
        <BookCarSearch onSearch={onSearch} />

        <Stack spacing={2} alignItems='center'>
          {
            searchVehicles.map((vehicle, i) => (
              <VehicleDetail
                key={i}
                vehicle={vehicle}
                sx={{ mt: 1 }}
                onBook={() => {
                  onBook(i);
                }}
              />
            ))
          }
        </Stack>

      </Container>
    </MainLayout>
  )
};