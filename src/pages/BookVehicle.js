import { Container, Stack } from "@mui/material";
import { useState } from "react";
import { MainLayout, BookVehicleSearch, VehicleDetail } from '../components';
import { useBooking, useVehicle } from "../hooks";

export default function BookVehicle() {

  const { vehicle: { vehicleItems: vehicles } } = useVehicle();
  const { newBooking } = useBooking();

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
      location: [searchData.fromLocation, searchData.toLocation],
      date: [searchData.startDate, searchData.endDate],
      vehicle: searchVehicles[index]
    }

    newBooking(booking);
  }

  return (
    <>
      <MainLayout>
        <Container maxWidth='lg' sx={{ pt: 4 }}>
          <BookVehicleSearch onSearch={onSearch} />

          <Stack spacing={2} alignItems='center' mt={2}>
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
    </>
  )
};