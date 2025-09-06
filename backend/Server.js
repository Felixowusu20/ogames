// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const authRoutes = require('./routes/authRoutes');
// const wordRoutes = require('./routes/wordRoutes');
// const categoriesRoute = require('./routes/categoriesRoute');

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/words', wordRoutes);
// app.use('/api/categories', categoriesRoute);


// mongoose.connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("✅ MongoDB connected");
//     app.listen(process.env.PORT, () => {
//       console.log(`🚀 Server running on port ${process.env.PORT}`);
//     });
//   })
//   .catch((err) => console.error('Mongo Error:', err.message));

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');   // ✅ Import morgan
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const wordRoutes = require('./routes/wordRoutes');
const categoriesRoute = require('./routes/categoriesRoute');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));   // ✅ Morgan logs requests in 'dev' format

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/words', wordRoutes);
app.use('/api/categories', categoriesRoute);

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error('Mongo Error:', err.message));
