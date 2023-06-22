const mongoose = require('mongoose');

const seatPricingSchema = new mongoose.Schema({
  seatClass: {
    type: String,
    required: true,
    unique: true
  },
  capacity: {
    type: Number,
    required: true
  },
  minPrice: {
    type: Number
  },
  normalPrice: {
    type: Number
  },
  maxPrice: {
    type: Number
  },
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking'
    }
  ]
});

const SeatPricing = mongoose.model('SeatPricing', seatPricingSchema);

module.exports = SeatPricing;
