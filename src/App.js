import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import BookVehicle from './pages/BookVehicle';
import Inventory from './pages/Inventory';
import Booking from './pages/Booking';
import Profile from './pages/Profile';
import { AdminAuth, RequireAuth } from './components';
import { useUser } from './hooks';

function App() {

  const { user: { isDarkMode } } = useUser()
  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light'
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='bookvehicle' element={
            <RequireAuth>
              <BookVehicle />
            </RequireAuth>
          } />
          <Route path='inventory' element={
            <AdminAuth>
              <Inventory />
            </AdminAuth>
          } />
          <Route path='booking' element={
            <AdminAuth>
              <Booking />
            </AdminAuth>
          } />
          <Route path='profile' element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          } />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
