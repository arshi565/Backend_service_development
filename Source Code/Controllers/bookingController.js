const Booking = require('../models/Booking');
const Seat = require('../models/Seat');

// Create a booking for selected seats
exports.createBooking = async (req, res) => {
  try {
    const { seatIds, name, phoneNumber } = req.body;

    // Check if seats are already booked
    const bookedSeats = await Seat.find({ _id: { $in: seatIds }, isBooked: true });
    if (bookedSeats.length > 0) {
      return res.status(400).json({ error: 'Seats are already booked' });
    }

    // Create a new booking
    const booking = new Booking({ seatIds, name, phoneNumber });
    await booking.save();

    // Update seat status to booked
    await Seat.updateMany({ _id: { $in: seatIds } }, { isBooked: true });

    res.json({ bookingId: booking._id, totalAmount: booking.calculateTotalAmount() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
