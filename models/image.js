const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  image: {
    url: String,
    filename: String
  },
  caption : String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Image = mongoose.model('image', imageSchema);

module.exports = Image;
