const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
const seatsRoutes = require('./routes/seatsRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const bookingsRoutes = require('./routes/bookingsRoutes');

// Mounting routes
app.use('/seats', seatsRoutes);
app.use('/seats/:id', seatsRoutes);
app.use('/booking', bookingRoutes);
app.use('/bookings', bookingsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
