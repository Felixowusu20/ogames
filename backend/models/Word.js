const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  text: { type: String, required: true },
  category: {
    type: String,
    enum: [
      "Science",
      "Technology",
      "History",
      "Games",
      "Movies",
      "Music",
      "Nature",
      "Sports",
      "Coding",
      "Fantasy",
      "Geography",
      "Art",
      "Space",
      "Random"
    ],
    required: true
  }
});

module.exports = mongoose.model('Word', wordSchema);
