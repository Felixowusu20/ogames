// Auto-create default admin
const User = require('./models/User');
const bcrypt = require('bcryptjs');

async function createDefaultAdmin() {
  const existingAdmin = await User.findOne({ username: 'ogames' });
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('ogames123', 10);
    const newAdmin = new User({ username: 'ogames', password: hashedPassword });
    await newAdmin.save();
    console.log('✅ Default admin created');
  } else {
    console.log('👤 Admin user already exists');
  }
}
