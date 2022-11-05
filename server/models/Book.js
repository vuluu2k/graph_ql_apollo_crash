const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const BookSchema = new Schema({
  name: {
    type: String,
  },
  genre: {
    type: String,
  },
  authorId: {
    type: String,
  },
});

module.exports = new model('books', BookSchema);
