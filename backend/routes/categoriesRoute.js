// const router = require('express').Router();

// router.get('/', (req, res) => {
//   const categories = [
//     "Science", "Technology", "History", "Games", "Movies",
//     "Music", "Nature", "Sports", "Coding", "Fantasy",
//     "Geography", "Art", "Space", "Random"
//   ];
//   res.json(categories);
// });

// module.exports = router;

const router = require("express").Router();

// Static categories (kept in sync with Word model)
const categories = [
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
  "Random",
];

/**
 * @desc    Get all categories
 * @route   GET /api/categories
 * @access  Public
 */
router.get("/", (req, res) => {
  res.status(200).json(categories);
});

module.exports = router;
