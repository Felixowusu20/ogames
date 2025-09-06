const Word = require('../models/Word');

/**
 * @desc    Get all words
 * @route   GET /api/words
 * @access  Private
 */
exports.getWords = async (req, res) => {
  try {
    const words = await Word.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(words);
  } catch (err) {
    console.error("Error fetching words:", err.message);
    res.status(500).json({ error: "Server error, please try again later." });
  }
};

/**
 * @desc    Add a new word
 * @route   POST /api/words
 * @access  Private
 */
exports.addWord = async (req, res) => {
  const { text, category } = req.body;

  // Basic validation
  if (!text || !category) {
    return res.status(400).json({ error: "Text and category are required." });
  }

  try {
    const newWord = new Word({ text, category });
    const saved = await newWord.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("Error saving word:", err.message);
    res.status(400).json({ error: "Failed to save word, please try again." });
  }
};
