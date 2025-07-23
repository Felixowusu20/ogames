// const User = require('../models/user');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// exports.login = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const admin = await User.findOne({ username });
//     if (!admin) return res.status(400).json({ message: 'Invalid credentials' });

//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//     const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  // Hardcoded credentials
  const adminUsername = 'ogames';
  const adminPassword = 'ogames123';

  try {
    if (username !== adminUsername || password !== adminPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ username }, process.env.JWT_SECRET || 'default_secret', {
      expiresIn: '1d',
    });

    return res.json({ token, message: 'Login successful' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

