const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  footballer: String,
  comments: String,
  submittedAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Contact', ContactSchema);