const Booking = require('../models/Booking');

// Retrieve bookings by user identifier (email or phone number)
exports.getBookingsByUser = async (req, res) => {
  try {
    const userIdentifier = req.query.userIdentifier;

    if (!userIdentifier) {
      return res.status(400).json({ error: 'User identifier not provided' });
    }

    const bookings = await Booking.find({ $or: [{ email: userIdentifier }, { phoneNumber: userIdentifier }] });

    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
