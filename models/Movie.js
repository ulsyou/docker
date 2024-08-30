const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  num_mflix_comments: Number,
  poster: String,
  title: String,
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [String],
  writers: [String],
  awards: Object,
  lastupdated: String,
  year: Number,
  imdb: Object,
  countries: [String],
  type: String,
  tomatoes: Object,
  plot_embedding: [Number]
});

module.exports = mongoose.model('Movie', movieSchema, 'movies');
