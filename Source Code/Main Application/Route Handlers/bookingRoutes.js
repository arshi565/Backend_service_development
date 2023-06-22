const express = require('express');
const router = express.Router();

// Controller
const bookingController = require('../controllers/bookingController');

// POST /booking
// Create a booking for selected seats
router.post('/', bookingController.createBooking);

module.exports = router;
