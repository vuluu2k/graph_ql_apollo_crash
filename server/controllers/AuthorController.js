const Author = require('../models/Author');

class AuthorController {
  async getAuthors() {
    try {
      const authors = await Author.find();
      return authors;
    } catch (error) {
      return error;
    }
  }

  async getAuthorById(id) {
    try {
      const author = await Author.findById(id);
      return author;
    } catch (error) {
      return error;
    }
  }

  async createAuthor(args) {
    try {
      const newAuthor = new Author(args);
      return await newAuthor.save();
    } catch (error) {
      return error;
    }
  }
}

module.exports = new AuthorController();
