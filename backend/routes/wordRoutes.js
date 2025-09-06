// const router = require('express').Router();
// const { getWords, addWord } = require('../controllers/WordController');
// const verifyToken = require('../middleware/authmiddleware');

// router.get('/', getWords);
// router.post('/', verifyToken, addWord);

// module.exports = router;
const router = require("express").Router();
const { getWords, addWord } = require("../controllers/WordController");
const authMiddleware = require("../middleware/authmiddleware");

/**
 * @desc    Get all words
 * @route   GET /api/words
 * @access  Public
 */
router.get("/", getWords);

/**
 * @desc    Add a new word
 * @route   POST /api/words
 * @access  Private (requires JWT)
 */
router.post("/", authMiddleware, addWord);

module.exports = router;
