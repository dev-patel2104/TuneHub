const mongoose = require('mongoose');

const uuid = require('uuid'); 

const Review = require('../models/reviewModel.js');

const songSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  artist: [{ type: Number }],
  duration: { type: String },
  genres: [{ type: String }],
  releaseYear: { type: Number },
  reviews: { type : [Review.schema], default : []},
});

songSchema.pre('save', async function (next) {
  try {
    const generatedId = uuid.v4();
    
    if (!this.id) {
      this.id = uuid.v4(); // Generate a UUID only if the id field is not already set
    }

    next();

  }
  catch (error) {
    next(error);
  }
});

const Song = mongoose.model('Song', songSchema, 'Song');

module.exports = Song;