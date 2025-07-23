const Word = require('../models/Word');

exports.getWords = async (req, res) => {
  try {
    const words = await Word.find();
    res.json(words);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addWord = async (req, res) => {
  const { text, category } = req.body;
  try {
    const newWord = new Word({ text, category });
    const saved = await newWord.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
