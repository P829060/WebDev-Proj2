const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  footballer: String,
  comments: String,
}, {
  timestamps: true  // adds createdAt and updatedAt
});

module.exports = mongoose.model('Message', messageSchema);