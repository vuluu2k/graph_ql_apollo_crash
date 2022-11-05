const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const AuthorSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

module.exports = new model('authors', AuthorSchema);
