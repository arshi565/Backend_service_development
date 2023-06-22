const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  seatIds: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Calculate the total amount for the booking
bookingSchema.methods.calculateTotalAmount = function() {
  // Perform the necessary calculation based on your pricing logic
  // Replace this with your actual pricing calculation logic
  // For example, you can fetch the seat pricing information and calculate the total amount based on seat classes and quantities.
  const totalAmount = 0; // Replace with your pricing calculation logic
  return totalAmount;
};

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
