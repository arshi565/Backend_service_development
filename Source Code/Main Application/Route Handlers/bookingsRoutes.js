const express = require('express');
const router = express.Router();

// Controller
const bookingsController = require('../controllers/bookingsController');

// GET /bookings
// Retrieve bookings by user identifier (email or phone number)
router.get('/', bookingsController.getBookingsByUser);

module.exports = router;
