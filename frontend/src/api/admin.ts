import { api } from './client';

export type AdminStats = {
  totalMovies: number;
  activeMovies: number;
  halls: number;
  upcomingScreenings: number;
  totalBookings: number;
  confirmedBookings: number;
  totalUsers: number;
  revenue: number;
};

export type AdminUser = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'USER' | 'MANAGER' | 'ADMIN';
  isActive: boolean;
  createdAt: string;
  _count: { bookings: number };
};

export type AdminBooking = {
  id: number;
  status: string;
  createdAt: string;
  user: { id: number; email: string; firstName: string; lastName: string };
  screening: {
    id: number;
    startTime: string;
    endTime: string;
    price: number;
    movie: { id: number; title: string };
    hall: { id: number; name: string };
  };
  seats: { id: number; seat: { id: number; rowLabel: string; seatNumber: number } }[];
};

export type Genre = {
  id: number;
  name: string;
  _count: { movies: number };
};

export type AdminMovie = {
  id: number;
  title: string;
  description: string;
  durationMinutes: number;
  posterUrl: string | null;
  trailerUrl: string | null;
  isActive: boolean;
  genres: { id: number; name: string }[];
  createdAt: string;
};

export type AdminHall = {
  id: number;
  name: string;
  _count: { seats: number; screenings: number };
};

export type AdminScreening = {
  id: number;
  startTime: string;
  endTime: string;
  price: number;
  movie: { id: number; title: string };
  hall: { id: number; name: string };
  createdAt: string;
};

// Stats
export const getAdminStats = () =>
  api.get<AdminStats>('/admin/stats').then((r) => r.data);

// Users
export const getAdminUsers = () =>
  api.get<AdminUser[]>('/admin/users').then((r) => r.data);

export const updateUserRole = (id: number, role: string) =>
  api.patch<AdminUser>(`/admin/users/${id}/role`, { role }).then((r) => r.data);

export const toggleUserActive = (id: number) =>
  api.patch<AdminUser>(`/admin/users/${id}/toggle-active`).then((r) => r.data);

export const deleteUser = (id: number) =>
  api.delete(`/admin/users/${id}`);

// Bookings (all)
export const getAdminBookings = () =>
  api.get<AdminBooking[]>('/admin/bookings').then((r) => r.data);

export const updateBookingStatus = (id: number, status: string) =>
  api.patch<AdminBooking>(`/admin/bookings/${id}/status`, { status }).then((r) => r.data);

// Genres
export const getGenres = () =>
  api.get<Genre[]>('/admin/genres').then((r) => r.data);

export const createGenre = (name: string) =>
  api.post<Genre>('/admin/genres', { name }).then((r) => r.data);

export const updateGenre = (id: number, name: string) =>
  api.put<Genre>(`/admin/genres/${id}`, { name }).then((r) => r.data);

export const deleteGenre = (id: number) =>
  api.delete(`/admin/genres/${id}`);

// Movies
export const getAllMoviesAdmin = () =>
  api.get<AdminMovie[]>('/movies/all').then((r) => r.data);

export const createMovieAdmin = (data: {
  title: string;
  description: string;
  durationMinutes: number;
  posterUrl?: string;
  trailerUrl?: string;
  genreIds?: number[];
}) => api.post<AdminMovie>('/movies', data).then((r) => r.data);

export const updateMovieAdmin = (
  id: number,
  data: Partial<{
    title: string;
    description: string;
    durationMinutes: number;
    posterUrl: string;
    trailerUrl: string;
    isActive: boolean;
    genreIds: number[];
  }>
) => api.put<AdminMovie>(`/movies/${id}`, data).then((r) => r.data);

export const toggleMovieActive = (id: number, isActive: boolean) =>
  api.put<AdminMovie>(`/movies/${id}`, { isActive }).then((r) => r.data);

export const deleteMovieAdmin = (id: number) =>
  api.delete(`/movies/${id}`);

// Halls
export const getAllHallsAdmin = () =>
  api.get<AdminHall[]>('/halls').then((r) => r.data);

export const createHallAdmin = (data: { name: string; rows: string[]; seatsPerRow: number }) =>
  api.post<AdminHall>('/halls', data).then((r) => r.data);

export const updateHallAdmin = (id: number, data: { name?: string; rows?: string[]; seatsPerRow?: number }) =>
  api.put<AdminHall>(`/halls/${id}`, data).then((r) => r.data);

export const deleteHallAdmin = (id: number) =>
  api.delete(`/halls/${id}`);

// Screenings
export const getAllScreeningsAdmin = () =>
  api.get<AdminScreening[]>('/admin/screenings').then((r) => r.data);

export const createScreeningAdmin = (data: {
  movieId: number;
  hallId: number;
  startTime: string;
  endTime: string;
  price: number;
}) => api.post<AdminScreening>('/screenings', data).then((r) => r.data);

export const updateScreeningAdmin = (
  id: number,
  data: Partial<{ movieId: number; hallId: number; startTime: string; endTime: string; price: number }>
) => api.put<AdminScreening>(`/screenings/${id}`, data).then((r) => r.data);

export const deleteScreeningAdmin = (id: number) =>
  api.delete(`/screenings/${id}`);
