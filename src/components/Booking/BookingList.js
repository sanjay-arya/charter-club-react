import { TableContainer, Table, TableBody, TableHead, Paper } from '@mui/material';
import { BookingCard } from '.';

export default function BookingList({ bookings }) {

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
          </TableHead>
          <TableBody>
            {
              bookings.map(booking => (
                <BookingCard
                  key={booking.id}
                  booking={booking}
                />
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
};
