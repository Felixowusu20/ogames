const router = require('express').Router();
const { getWords, addWord } = require('../controllers/WordController');
const verifyToken = require('../middleware/authMiddleware');

router.get('/', getWords);
router.post('/', verifyToken, addWord);

module.exports = router;
