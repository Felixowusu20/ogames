const router = require('express').Router();

router.get('/', (req, res) => {
  const categories = [
    "Science", "Technology", "History", "Games", "Movies",
    "Music", "Nature", "Sports", "Coding", "Fantasy",
    "Geography", "Art", "Space", "Random"
  ];
  res.json(categories);
});

module.exports = router;
