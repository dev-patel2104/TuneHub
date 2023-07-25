const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  reviewId: { type: String },
  userId: { type: String },
  rating: { type: Number },
  comment: { type: String }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;