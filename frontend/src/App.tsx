import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';
import Home from './pages/Home';
import Listings from './pages/Listings';
import MovieDetails from './pages/MovieDetails';
import Screening from './pages/Screening';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import AdminLayout from './pages/Admin/AdminLayout';
import Dashboard from './pages/Admin/Dashboard';
import AdminMovies from './pages/Admin/Movies';
import AdminHalls from './pages/Admin/Halls';
import AdminScreenings from './pages/Admin/Screenings';
import AdminUsers from './pages/Admin/Users';
import AdminBookings from './pages/Admin/Bookings';
import AdminGenres from './pages/Admin/Genres';

const AUTH_ROUTES = ['/login', '/register', '/auth'];

function AppLayout({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  const location = useLocation();
  const showNav = !AUTH_ROUTES.includes(location.pathname);
  return (
    <>
      {showNav && <Navbar isDark={isDark} toggleTheme={toggleTheme} />}
      <Outlet />
    </>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(d => !d);

  useEffect(() => {
    document.documentElement.classList.toggle('light', !isDark);
  }, [isDark]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout isDark={isDark} toggleTheme={toggleTheme} />}>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/screening/:id" element={<ProtectedRoute><Screening /></ProtectedRoute>} />
          <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
          <Route path="/confirmation" element={<ProtectedRoute><Confirmation /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth defaultMode="signup" />} />
          <Route path="/auth" element={<Auth />} />
        </Route>

        {/* Admin panel — protected, has its own layout with sidebar */}
        <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="movies" element={<AdminMovies />} />
          <Route path="halls" element={<AdminHalls />} />
          <Route path="screenings" element={<AdminScreenings />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="genres" element={<AdminGenres />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
