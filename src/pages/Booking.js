import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Container, Tab } from '@mui/material';
import { useState, useEffect } from 'react';
import { BookingList, MainLayout } from '../components';
import { useBooking, useUser } from '../hooks';

export default function Booking() {

  const { booking: { bookingItems } } = useBooking();
  const { user: { currentUser } } = useUser();

  const [selectedTab, setSelectedTab] = useState('all')
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(bookingItems.filter(booking => booking.vehicle.ownerId === currentUser.id));
  }, [bookingItems]);

  return (
    <>
      <MainLayout>
        <Container maxWidth='lg' sx={{ pt: 4 }}>
          <TabContext value={selectedTab}>
            <TabList
              variant='scrollable' allowScrollButtonsMobile
              onChange={(event, newValue) => {
                setSelectedTab(newValue);
              }}
            >
              <Tab label='All' value='all' />
              <Tab label='Pending' value='pending' />
              <Tab label='Progress' value='progress' />
              <Tab label='Completed' value='completed' />
              <Tab label='Rejected' value='rejected' />
              <Tab label='Canceled' value='canceled' />
            </TabList>

            <TabPanel value='all' sx={{ pl: 0, pr: 0 }}>
              <BookingList
                bookings={bookings}
              />
            </TabPanel>

            <TabPanel value='pending' sx={{ pl: 0, pr: 0 }}>
              <BookingList
                bookings={bookings.filter(booking => booking.status === 'pending')}
              />
            </TabPanel>

            <TabPanel value='progress' sx={{ pl: 0, pr: 0 }}>
              <BookingList
                bookings={bookings.filter(booking => booking.status === 'progress')}
              />
            </TabPanel>

            <TabPanel value='completed' sx={{ pl: 0, pr: 0 }}>
              <BookingList
                bookings={bookings.filter(booking => booking.status === 'completed')}
              />
            </TabPanel>

            <TabPanel value='rejected' sx={{ pl: 0, pr: 0 }}>
              <BookingList
                bookings={bookings.filter(booking => booking.status === 'rejected')}
              />
            </TabPanel>

            <TabPanel value='canceled' sx={{ pl: 0, pr: 0 }}>
              <BookingList
                bookings={bookings.filter(booking => booking.status === 'canceled')}
              />
            </TabPanel>
          </TabContext>
        </Container>
      </MainLayout >
    </>
  );
};