import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Listings from './pages/Listings';
import MovieDetails from './pages/MovieDetails';
import Screening from './pages/Screening';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import Auth from './pages/Auth';
import Profile from './pages/Profile';

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
      </Routes>
    </BrowserRouter>
  );
}
