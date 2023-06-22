const Seat = require('../models/Seat');
const SeatPricing = require('../models/SeatPricing');

// Get all seats
exports.getAllSeats = async (req, res) => {
  try {
    const seats = await Seat.find().sort('seatClass');
    res.json(seats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get seat details and pricing
exports.getSeatPricing = async (req, res) => {
  try {
    const seatId = req.params.id;
    const seat = await Seat.findById(seatId);

    if (!seat) {
      return res.status(404).json({ error: 'Seat not found' });
    }

    const seatPricing = await SeatPricing.findOne({ seatClass: seat.seatClass });

    let pricing;
    if (seatPricing) {
      const bookingsCount = seatPricing.bookings.length;
      if (bookingsCount / seatPricing.capacity < 0.4) {
        pricing = seatPricing.minPrice || seatPricing.normalPrice;
      } else if (bookingsCount / seatPricing.capacity >= 0.4 && bookingsCount / seatPricing.capacity < 0.6) {
        pricing = seatPricing.normalPrice || seatPricing.maxPrice;
      } else {
        pricing = seatPricing.maxPrice || seatPricing.normalPrice;
      }
    }

    res.json({ seat, pricing });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
