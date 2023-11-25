const mongoose = require('mongoose');

const userSechema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'a User should have a name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'a User should have a email'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'a User should have a password'],
  },
  role: {
    type: String,
    enum: ['admin', 'user', 'manager'],
  },
});

const User = mongoose.model('User', userSechema);

module.exports = User;
