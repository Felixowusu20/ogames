const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Word text is required"],
      trim: true,
      minlength: [2, "Word must be at least 2 characters long"],
      maxlength: [100, "Word cannot exceed 100 characters"],
    },
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
      required: [true, "Category is required"],
    },
  },
  { timestamps: true } // adds createdAt & updatedAt
);

module.exports = mongoose.model("Word", wordSchema);
