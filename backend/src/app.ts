import express from 'express';
import cors from 'cors';

import movieRoutes from './routes/movie.routes.js';
import hallRoutes from './routes/hall.routes.js';
import screeningRoutes from './routes/screening.routes.js';
import bookingRoutes from './routes/booking.routes.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import adminRoutes from './routes/admin.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/movies', movieRoutes);
app.use('/api/halls', hallRoutes);
app.use('/api/screenings', screeningRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);


export default app;
