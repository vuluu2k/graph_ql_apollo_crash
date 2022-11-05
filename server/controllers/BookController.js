const Book = require('../models/Book');

class BookController {
  async getBooks(authorId) {
    try {
      const books = authorId ? await Book.find({ authorId }) : await Book.find();
      return books;
    } catch (error) {
      return error;
    }
  }

  async getBookById(id) {
    try {
      const book = await Book.findById(id);
      console.log(id);
      return book;
    } catch (error) {
      return error;
    }
  }

  async createBook(args) {
    try {
      const newBook = new Book(args);
      return await newBook.save();
    } catch (error) {
      return error;
    }
  }
}

module.exports = new BookController();
