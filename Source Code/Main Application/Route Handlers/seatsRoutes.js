const express = require('express');
const router = express.Router();

// Controller
const seatsController = require('../controllers/seatsController');

// GET /seats
// Return all the seats, ordered by seat class, with is_booked status
router.get('/', seatsController.getAllSeats);

// GET /seats/:id
// Return seat details and pricing based on seat class bookings
router.get('/:id', seatsController.getSeatPricing);

module.exports = router;
